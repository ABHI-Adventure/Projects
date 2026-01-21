import streamlit as st
import requests
import json
import os
from typing import Optional
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Page configuration
st.set_page_config(
    page_title="Code Explanation Tool",
    page_icon="💻",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS
st.markdown("""
    <style>
    .main {
        padding: 2rem;
    }
    .stTabs [data-baseweb="tab-list"] button {
        font-size: 1rem;
        font-weight: bold;
    }
    .code-section {
        background-color: #f0f2f6;
        padding: 1rem;
        border-radius: 0.5rem;
        margin: 1rem 0;
    }
    .explanation-box {
        background-color: #e8f4f8;
        padding: 1.5rem;
        border-left: 4px solid #0066cc;
        border-radius: 0.5rem;
        margin: 1rem 0;
    }
    </style>
""", unsafe_allow_html=True)

# Title and description
st.title("💻 Code Explanation Gen AI Tool")
st.markdown("Powered by Hugging Face | Explain code in simple language with step-by-step logic")

# Sidebar configuration
st.sidebar.title("⚙️ Configuration")

# Get API key from user or environment
api_key = st.sidebar.text_input(
    "Enter your Hugging Face API Key",
    value=os.getenv("HUGGINGFACE_API_KEY", ""),
    type="password",
    help="Get your API key from https://huggingface.co/settings/tokens"
)

# Model selection
model_options = {
    "mistralai/Mistral-7B-Instruct-v0.1": "Mistral 7B (Recommended)",
    "meta-llama/Llama-2-7b-chat-hf": "Llama 2 7B Chat",
    "tiiuae/falcon-7b-instruct": "Falcon 7B Instruct",
    "google/flan-t5-large": "FLAN-T5 Large"
}

selected_model = st.sidebar.selectbox(
    "Select Language Model",
    options=list(model_options.keys()),
    format_func=lambda x: model_options[x],
    help="Choose the LLM for code explanation"
)

# Programming language selection
programming_languages = [
    "Python", "C", "C++", "Java", "JavaScript", 
    "TypeScript", "Go", "Rust", "PHP", "Ruby",
    "C#", "Swift", "Kotlin", "R", "Scala"
]

selected_lang = st.sidebar.selectbox(
    "Programming Language",
    programming_languages,
    help="Select the primary language of your code"
)

# Temperature setting
temperature = st.sidebar.slider(
    "Model Temperature",
    min_value=0.0,
    max_value=1.0,
    value=0.3,
    step=0.1,
    help="Lower = more deterministic, Higher = more creative"
)

# Max tokens setting
max_tokens = st.sidebar.slider(
    "Max Response Length",
    min_value=256,
    max_value=2048,
    value=1024,
    step=256,
    help="Maximum tokens in the explanation"
)

# Main content area
col1, col2 = st.columns([1, 1])

with col1:
    st.subheader("📝 Paste Your Code")
    code_input = st.text_area(
        "Enter your code here:",
        height=400,
        placeholder="# Paste your code here\nprint('Hello, World!')",
        label_visibility="collapsed"
    )

with col2:
    st.subheader("📚 Explanation")
    explanation_placeholder = st.empty()

# Explain button
if st.button("🚀 Explain Code", use_container_width=True, type="primary"):
    if not api_key:
        st.error("❌ Please enter your Hugging Face API Key in the sidebar")
    elif not code_input.strip():
        st.error("❌ Please paste some code to explain")
    else:
        with st.spinner("🤖 Analyzing code with AI..."):
            try:
                # Prepare the prompt
                prompt = f"""You are an expert programming tutor. Explain the following {selected_lang} code in simple, beginner-friendly language.

Provide a structured explanation:

1. **Overview**: Brief description of what the code does (1-2 sentences)

2. **Step-by-Step Logic**: Explain each line or logical block
   - What does this part do?
   - Why is it important?

3. **Key Concepts**: Important programming concepts used
   - List each concept
   - Brief explanation

4. **Time Complexity**: O notation analysis

5. **Space Complexity**: Memory usage analysis

6. **Edge Cases**: Potential issues or edge cases to consider

Code to explain:
```{selected_lang.lower()}
{code_input}
```

Provide clear, structured explanation suitable for beginners. Use simple language and avoid jargon when possible."""

                # Call Hugging Face API
                headers = {"Authorization": f"Bearer {api_key}"}
                
                payload = {
                    "inputs": prompt,
                    "parameters": {
                        "max_new_tokens": max_tokens,
                        "temperature": temperature,
                        "top_p": 0.95,
                        "do_sample": True
                    }
                }

                api_url = f"https://router.huggingface.co{selected_model}"
                response = requests.post(api_url, headers=headers, json=payload)

                if response.status_code == 200:
                    result = response.json()
                    
                    # Extract generated text
                    if isinstance(result, list) and len(result) > 0:
                        explanation = result[0].get("generated_text", "No explanation generated")
                        # Remove the prompt from the output if present
                        if prompt in explanation:
                            explanation = explanation.replace(prompt, "").strip()
                    else:
                        explanation = str(result)
                    
                    # Display explanation with formatting
                    with explanation_placeholder.container():
                        st.markdown(f"""
                        <div class="explanation-box">
                        {explanation}
                        </div>
                        """, unsafe_allow_html=True)
                        
                        st.success(f"✅ Explanation generated using {model_options[selected_model]}")
                        
                elif response.status_code == 429:
                    st.warning("⏳ Model is loading or rate limited. Please wait a moment and try again.")
                elif response.status_code == 401:
                    st.error("❌ Invalid API key. Please check your Hugging Face token.")
                elif response.status_code == 403:
                    st.error("❌ Access denied. Make sure you have access to this model.")
                else:
                    st.error(f"❌ Error: {response.status_code} - {response.text}")

            except Exception as e:
                st.error(f"❌ An error occurred: {str(e)}")

# Divider
st.divider()

# Footer with features and usage
col1, col2 = st.columns(2)

with col1:
    st.markdown("""
    ### 🎯 Features
    - **Multi-language Support**: 15+ programming languages
    - **Intelligent Analysis**: Line-by-line breakdown
    - **Complexity Analysis**: Time & space complexity
    - **Beginner-Friendly**: Easy-to-understand explanations
    - **Multiple Models**: Choice of LLMs from Hugging Face
    - **Customizable**: Adjust temperature and response length
    """)

with col2:
    st.markdown("""
    ### 📖 How to Use
    1. Get API key at https://huggingface.co/settings/tokens
    2. Enter your Hugging Face API key in the sidebar
    3. Select your programming language
    4. Choose an LLM model
    5. Paste your code
    6. Click "Explain Code"
    
    ### ⚡ Supported Models
    - Mistral 7B (Fast & Accurate)
    - Llama 2 (Detailed Explanations)
    - Falcon 7B (Balanced)
    - FLAN-T5 (Lightweight)
    """)

st.markdown("---")
st.markdown("*Made with ❤️ using Streamlit & Hugging Face | © 2024*")

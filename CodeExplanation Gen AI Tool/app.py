import streamlit as st
from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint


# Set up the Hugging Face model using LangChain
# Using a free, open-source model suitable for code explanation (e.g., a small code-aware model)
# Note: You can replace the repo_id with another free model if needed, but this one is lightweight and works for basic explanations.
llm = HuggingFaceEndpoint(
    repo_id="Qwen/Qwen3-Coder-480B-A35B-Instruct",  # A free conversational model; for code-specific, consider "Salesforce/codegen-350M-mono" if available
    task="text-generation",
    huggingfacehub_api_token = Hugging_Face_API_Token,
)

chat_model = ChatHuggingFace(llm=llm)

# Streamlit app
st.title("Code Explanation Gen AI Tool")
st.write("Enter your code below, and click 'Explain' to generate an AI-powered explanation using LangChain and a free Hugging Face model.")

# Text area for code input
code_input = st.text_area("Enter your code here:", height=200)

# Button to generate explanation
if st.button("Explain"):
    if code_input.strip():
        # Create a prompt for the model
        prompt = f"""You are an expert programming tutor. Explain the following C++ code in simple, beginner-friendly language.

            Provide a structured explanation:

            1. **Overview**: Brief description of what the code does (1-2 sentences)

            2. **Overall Logic**: Explain overall logical block

            3. **Key Concepts**: List each concept

            4. **Time Complexity**: O notation analysis

            5. **Space Complexity**: Memory usage analysis

            6. **Edge Cases**: Potential issues or edge cases to consider

            Code to explain:
            ```cpp
            {code_input}
            ```

            Provide clear, structured explanation suitable for beginners. Use simple language and avoid jargon when possible."""

        
        # Generate explanation using the LLM
        with st.spinner("Generating explanation..."):
            explanation = chat_model.invoke(prompt)
        
        # Display the explanation
        st.subheader("Explanation:")
        st.write(explanation.content)
    else:
        st.error("Please enter some code to explain.")

# Footer
st.write("---")

st.write("Powered by LangChain, Hugging Face, and Streamlit. Model: DialoGPT-medium (free and open-source).")





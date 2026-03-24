from flask import Blueprint, request, jsonify
from dotenv import load_dotenv
import os

from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint

load_dotenv()

code_bp = Blueprint("code", __name__)

HUGGINGFACE_API_KEY = os.getenv("HUGGINGFACEHUB_ACCESS_TOKEN")

llm = HuggingFaceEndpoint(
    repo_id="meta-llama/Llama-3.1-8B-Instruct",
    huggingfacehub_api_token=HUGGINGFACE_API_KEY,
    temperature=0.3,
    max_new_tokens=300
)

model = ChatHuggingFace(llm=llm)


@code_bp.route("/analyze", methods=["POST"])
def analyze():

    data = request.json

    language = data.get("language")
    task = data.get("task")
    code = data.get("code")
    from_lang = data.get("from")
    to_lang = data.get("to")

    if task == "Code Conversion":
        prompt = f"Convert the following {from_lang} code to {to_lang}:\n\n{code}"

    elif task == "Code Summarization":
        prompt = f"Summarize this {language} code:\n\n{code}"

    elif task == "Bug/Error Detection":
        prompt = f"Find bugs in this {language} code:\n\n{code}"

    elif task == "Code Optimization":
        prompt = f"Optimize this {language} code:\n\n{code}"

    elif task == "Code Documentation Generation":
        prompt = f"Generate documentation for this {language} code:\n\n{code}"

    elif task == "Algorithm Identification":
        prompt = f"What algorithm is used in this {language} code?\n\n{code}"

    elif task == "Complexity Analysis":
        prompt = f"Analyze time and space complexity of this code:\n\n{code}"

    elif task == "Code Quality Evaluation":
        prompt = f"Evaluate the code quality and suggest improvements:\n\n{code}"

    elif task == "Learning Mode for Students":
        prompt = f"Explain this {language} code step by step for a beginner:\n\n{code}"

    else:
        prompt = code

    result = model.invoke(prompt)

    return jsonify({"result": result.content})
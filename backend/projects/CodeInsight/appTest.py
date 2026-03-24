from langchain_huggingface import ChatHuggingFace
from langchain_huggingface import HuggingFaceEndpoint
from dotenv import load_dotenv
import os

load_dotenv()

HF_TOKEN = os.getenv("HUGGINGFACEHUB_ACCESS_TOKEN")

llm = HuggingFaceEndpoint(
    repo_id="meta-llama/Llama-3.1-8B-Instruct",
    huggingfacehub_api_token=HF_TOKEN,
    temperature=0.5,
    max_new_tokens=300
)

model = ChatHuggingFace(llm=llm)

prompt = "Explain this Python code:\nfor i in range(5): print(i)"

response = model.invoke(prompt)

print(response.content)
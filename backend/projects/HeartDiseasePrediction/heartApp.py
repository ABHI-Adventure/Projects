from flask import Blueprint, request, jsonify
import pickle
import numpy as np

heart_bp = Blueprint("heart", __name__)

model = pickle.load(open("projects/HeartDiseasePrediction/model.pkl", "rb"))

@heart_bp.route("/predict", methods=["POST"])
def predict():

    data = request.json

    features = [
        float(data["age"]),
        float(data["sex"]),
        float(data["cp"]),
        float(data["trestbps"]),
        float(data["chol"]),
        float(data["fbs"]),
        float(data["restecg"]),
        float(data["thalach"]),
        float(data["exang"]),
        float(data["oldpeak"]),
        float(data["slope"]),
        float(data["ca"]),
        float(data["thal"])
    ]

    final_features = np.array(features).reshape(1, -1)

    prediction = model.predict(final_features)

    if prediction[0] == 1:
        result = "Heart Disease Detected"
    else:
        result = "No Heart Disease"

    return jsonify({"prediction": result})
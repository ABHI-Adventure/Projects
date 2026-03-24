import React, { useState } from "react";

import PredictionResult from "./components/PredictionResult";
import AllInputs from "./components/AllInputs";

import { predictHeartDisease } from "./services/heartApi";

function HeartDiseaseForm({ dark }) {

  const [form, setForm] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: ""
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleNumberSelect = (e) => {
    setForm({
      ...form,
      [e.target.name]: Number(e.target.value)
    });
  };

  const handlePredict = async () => {

    try {

      const data = await predictHeartDisease(form);
      setResult(data.prediction);

    } catch (error) {

      console.error(error);
      setResult("Error getting prediction");

    }

  };

  return (

    <div className="flex justify-center items-center w-full">

      <div className={`p-8 rounded-lg shadow-xl w-[500px]
      ${dark ? "bg-gray-800 text-white" : "bg-white"}`}>

        <h2 className="text-3xl font-bold text-center mb-6">
          ❤️ Heart Disease Prediction
        </h2>

        <AllInputs
          dark={dark}
          handleChange={handleChange}
          handleNumberSelect={handleNumberSelect}
        />

        <div className="flex justify-end mt-5">
          <button
            onClick={handlePredict}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded"
          >
            Predict
          </button>
        </div>

        <PredictionResult 
          result={result} 
          dark={dark} 
        />

      </div>

    </div>
  );
}

export default HeartDiseaseForm;
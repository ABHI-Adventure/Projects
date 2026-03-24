import React from "react";

function PredictionResult({ result, dark }) {

  if (!result) return null;

  return (

    <div className={`mt-6 p-4 rounded 
    ${dark ? "bg-gray-700" : "bg-gray-100"}`}>

      <h3 className="font-semibold text-lg">
        Prediction Result
      </h3>

      <p className="mt-2">
        {result}
      </p>

    </div>

  );
}

export default PredictionResult;
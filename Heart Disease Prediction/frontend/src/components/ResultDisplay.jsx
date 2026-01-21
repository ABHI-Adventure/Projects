import React from 'react';

function ResultDisplay({ result }) {
  const isHighRisk = result.risk === 'High Risk';

  return (
    <div className={`result-container ${isHighRisk ? 'high-risk' : 'low-risk'}`}>
      <h2>Prediction Result</h2>
      <div className="result-box">
        <p className="risk-label">Risk Level: <strong>{result.risk}</strong></p>
        <p className="probability">Confidence: {(result.probability * 100).toFixed(2)}%</p>
      </div>
      <p className="recommendation">
        {isHighRisk 
          ? '⚠️ Please consult with a healthcare professional immediately.' 
          : '✅ Your risk appears to be low. Maintain a healthy lifestyle.'}
      </p>
    </div>
  );
}

export default ResultDisplay;
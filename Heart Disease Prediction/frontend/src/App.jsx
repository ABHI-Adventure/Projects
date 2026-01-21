import React, { useState } from 'react';
import Navigation from './components/Navigation';
import PredictionForm from './components/PredictionForm';
import ResultDisplay from './components/ResultDisplay';
import './styles/App.css';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePrediction = async (formData) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <Navigation />
      <main className="container">
        <PredictionForm onPredict={handlePrediction} loading={loading} />
        {result && <ResultDisplay result={result} />}
      </main>
    </div>
  );
}

export default App;
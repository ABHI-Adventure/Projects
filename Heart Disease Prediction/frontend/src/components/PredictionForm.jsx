import React, { useState } from 'react';

function PredictionForm({ onPredict, loading }) {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="prediction-form">
      <h2>Enter Your Medical Information</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Sex (0=Female, 1=Male)</label>
          <select name="sex" value={formData.sex} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="0">Female</option>
            <option value="1">Male</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Chest Pain Type (0-3)</label>
          <input type="number" name="cp" min="0" max="3" value={formData.cp} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Resting Blood Pressure</label>
          <input type="number" name="trestbps" value={formData.trestbps} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Cholesterol (mg/dl)</label>
          <input type="number" name="chol" value={formData.chol} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Fasting Blood Sugar &gt; 120</label>
          <select name="fbs" value={formData.fbs} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Max Heart Rate</label>
          <input type="number" name="thalach" value={formData.thalach} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Exercise Induced Angina</label>
          <select name="exang" value={formData.exang} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>ST Depression</label>
          <input type="number" step="0.1" name="oldpeak" value={formData.oldpeak} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Slope (0-2)</label>
          <input type="number" min="0" max="2" name="slope" value={formData.slope} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Vessels (0-3)</label>
          <input type="number" min="0" max="3" name="ca" value={formData.ca} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Thal Type (0-3)</label>
          <input type="number" min="0" max="3" name="thal" value={formData.thal} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-group">
        <label>Resting ECG (0-2)</label>
        <input type="number" min="0" max="2" name="restecg" value={formData.restecg} onChange={handleChange} required />
      </div>

      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? 'Analyzing...' : 'Get Prediction'}
      </button>
    </form>
  );
}

export default PredictionForm;
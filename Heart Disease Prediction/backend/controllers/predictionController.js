const { PythonShell } = require('python-shell');
const pool = require('../config');

exports.predict = async (req, res) => {
  try {
    const {
      age, sex, cp, trestbps, chol, fbs, restecg,
      thalach, exang, oldpeak, slope, ca, thal
    } = req.body;

    // Validate input
    if (!age || sex === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Call Python script for prediction
    const options = {
      mode: 'json',
      pythonPath: 'python',
      scriptPath: './ml_model',
      args: [age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]
    };

    PythonShell.run('predict.py', options, async (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Prediction failed' });
      }

      const prediction = results[0];
      const risk = prediction.prediction === 1 ? 'High Risk' : 'Low Risk';

      // Save to database
      try {
        const connection = await pool.getConnection();
        await connection.execute(
          'INSERT INTO predictions (age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal, result) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal, risk]
        );
        connection.release();
      } catch (dbError) {
        console.error('Database error:', dbError);
      }

      res.json({
        success: true,
        risk: risk,
        probability: prediction.probability
      });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(
      'SELECT * FROM predictions ORDER BY created_at DESC LIMIT 10'
    );
    connection.release();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
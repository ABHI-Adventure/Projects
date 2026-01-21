CREATE DATABASE heart_disease_db;

USE heart_disease_db;

CREATE TABLE predictions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  age INT,
  sex INT,
  cp INT,
  trestbps INT,
  chol INT,
  fbs INT,
  restecg INT,
  thalach INT,
  exang INT,
  oldpeak FLOAT,
  slope INT,
  ca INT,
  thal INT,
  result VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
# 🚀 Multi-Project Integration System

## 📌 Overview

This project is a **combined platform** where multiple applications are integrated under a **single Frontend and Backend**.

Instead of managing separate projects individually, all projects are organized and accessed from one unified system.

---

## 🏗️ Project Structure

```
root/
│
├── frontend/
│   └── projects/
│       ├── HeartDiseasePrediction
│       ├── CodeInsight
│       └── MovieRecommendationSystem
│
├── backend/
│   └── projects/
│       ├── Heart Disease Prediction
│       ├── Code Insight
│       └── Movie Recommendation System
│
└── README.md
```

---

## 📂 Projects Included

### 1. ❤️ Heart Disease Prediction

* Predicts the risk of heart disease using Machine Learning
* Uses input medical parameters
* Provides prediction result

---

### 2. 💻 Code Insight

* Analyzes code and provides insights
* Helps in understanding and improving code quality

---

### 3. 🎬 Movie Recommendation System

* Recommends movies based on user preferences
* Uses similarity-based or ML-based approach

---

## ⚙️ Architecture

* **Frontend**

  * Single UI for all projects
  * Organized under `projects` folder
  * User can navigate between different modules

* **Backend**

  * Centralized backend handling all APIs
  * Each project has its own logic inside `projects` folder

---

## 🔐 Environment Setup (Important)

For **Code Insight (Backend)**, you must create a `.env` file and add your Hugging Face token.

### 📍 Location:

```
backend/projects/Code Insight/.env
```

### 📄 Add this inside `.env`:

```
HUGGINGFACEHUB_ACCESS_TOKEN="your_access_token"
```

⚠️ Replace `"your_access_token"` with your actual Hugging Face access token.

---

## 🎯 Advantages

* ✔ Centralized system (easy to manage)
* ✔ Reusable components
* ✔ Scalable architecture
* ✔ Clean folder structure

---

## 🚀 How to Run

### 1. Clone Repository

```
git clone <your-repo-link>
cd <project-folder>
```

### 2. Install Dependencies

**Frontend**

```
cd frontend
npm install
npm start
```

**Backend**

```
cd backend
pip install -r requirements.txt
python app.py
```

---

## 📌 Future Improvements

* Add more projects
* Improve UI/UX
* Deploy on cloud
* Add authentication system

---

## 👨‍💻 Author

Abhilash Alshi

---

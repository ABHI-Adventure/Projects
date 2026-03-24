# 🚀 Multi-Project Integration System

## 📌 Overview

This project is a **combined platform** where multiple applications are integrated under a **single Frontend and Backend**.

Instead of managing separate projects individually, all projects are organized and accessed from one unified system.

---

## 🏗️ Project Structure

```id="a9xk2m"
root/
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   └── src/
│       ├── components/
│       │
│       ├── projects/
│       │   ├── Heart Disease Prediction
│       │   ├── Code Insight
│       │   └── Movie Recommendation System
│       │
│       ├── App.js
│       ├── App.css
│       ├── index.css
│       └── index.js
│
├── backend/
│   ├── projects/
│   │   ├── Heart Disease Prediction
│   │   ├── Code Insight
│   │   └── Movie Recommendation System
│   │
│   ├── app.py
│   └── requirements.txt
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
  * Organized using `components` and `projects` folders
  * Entry files: `App.js`, `index.js`

* **Backend**

  * Centralized backend handling all APIs
  * Each project has its own logic inside `projects` folder
  * Main entry file: `app.py`

---

## 🔐 Environment Setup (Important)

### 🔹 Code Insight (Backend)

Create a `.env` file:

📍 Location:

```id="8gk4lu"
backend/projects/Code Insight/.env
```

Add:

```id="zz6vka"
HUGGINGFACEHUB_ACCESS_TOKEN="your_access_token"
```

---

### 🔹 Movie Recommendation System (Backend)

Create a `.env` file:

📍 Location:

```id="y1t6vb"
backend/projects/Movie Recommendation System/.env
```

Add:

```id="nq2xq5"
TMDB_API_KEY="your_api_from_www.themoviedb.org"
```

👉 This key is used to **fetch and display movie images**

---

## 📥 Important Note (Movie Recommendation System)

The file `similarity.pkl` is **not included in the repository** due to large size.

### 🔽 Download it from:

```id="3c0f4k"
https://drive.google.com/file/d/1tlgTYyl2gAT4laPesLWab7Bk3LbJ-8nv/view?usp=sharing
```

### 📍 Place it in:

```id="v9g7dp"
backend/projects/Movie Recommendation System/
```

---

## 🎯 Advantages

* ✔ Centralized system (easy to manage)
* ✔ Reusable components
* ✔ Scalable architecture
* ✔ Clean folder structure

---

## 🚀 How to Run

### 1. Clone Repository

```id="j7r3ap"
git clone <your-repo-link>
cd <project-folder>
```

### 2. Install Dependencies

**Frontend**

```id="q8z1dk"
cd frontend
npm install
npm start
```

**Backend**

```id="p2x5kc"
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

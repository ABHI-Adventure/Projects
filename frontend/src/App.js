import React, { useState } from "react";

// Component Imports of main App 
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";

// Project Imports
import HeartDiseaseForm from "./projects/HeartDiseasePrediction/HeartDiseaseForm";
import CodeInsight from "./projects/CodeInsight/CodeInsight";
import MovieSelector from "./projects/MovieRecommendationSystem/MovieSelector";


function App() {

  const [open, setOpen] = useState(true);
  const [dark, setDark] = useState(false);
  const [section, setSection] = useState("Heart Disease Prediction");
  const [showLogin, setShowLogin] = useState(false);

  return (

    <div className={`h-screen flex flex-col ${dark ? "bg-gray-900 text-white" : "bg-white text-black"}`}>

      <Header
        toggleSidebar={() => setOpen(!open)}
        toggleDark={() => setDark(!dark)}
        dark={dark}
        openLogin={() => setShowLogin(true)}
      />

      <div className="flex flex-1">

        <Sidebar
          open={open}
          setSection={setSection}
          active={section}
          dark={dark}
        />

        <main className={`flex-1 p-6 ${dark ? "bg-gray-700" : "bg-gray-100"}`}>

          {section === "Heart Disease Prediction" && <HeartDiseaseForm dark={dark} />}
          {section === "Code Insight" && <CodeInsight dark={dark} />}
          {section === "Movie Recommendation" && <MovieSelector dark={dark} />}
          {section === "Section 4" && <h2>Content of Section 4</h2>}

        </main>

        

      </div>

      {showLogin && (
        <LoginModal close={() => setShowLogin(false)} dark={dark} />
      )}

      <Footer dark={dark} />

    </div>
  );
}

export default App;
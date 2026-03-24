import React, { useState } from "react";
import LanguageTaskSelector from "./components/LanguageTaskSelector";
import CodeEditor from "./components/CodeEditor";
import ResultViewer from "./components/ResultViewer";
import { analyzeCodeAPI } from "./services/codeApi";

function CodeInsight({ dark }) {

  const [language, setLanguage] = useState("");
  const [task, setTask] = useState("");
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const tasks = [
    "Code Summarization",
    "Bug/Error Detection",
    "Code Optimization",
    "Code Documentation Generation",
    "Code Conversion",
    "Algorithm Identification",
    "Complexity Analysis",
    "Code Quality Evaluation",
    "Learning Mode for Students"
  ];

  const languages = [
    "C","C#","C++","Clojure","Fortran","Go","Java","JavaScript",
    "Kotlin","Objective-C","Pascal","Perl","PHP","Python","R",
    "Ruby","Rust","Scala","TypeScript","Visual Basic"
  ];

  const analyzeCode = async () => {

    try {

      const data = await analyzeCodeAPI({
        language,
        task,
        code
      });

      setResult(data.result);

    } catch (err) {

      console.error(err);
      setResult("Error analyzing code");

    }

  };

  return (

    <div className="flex justify-center w-full">

      <div className={`p-8 rounded-lg shadow-xl max-w-5xl w-full
      ${dark ? "bg-gray-800 text-white" : "bg-white"}`}>

        <h2 className="text-3xl font-bold text-center mb-6">
          🧠 Code Insight AI
        </h2>

        <LanguageTaskSelector
          language={language}
          task={task}
          setLanguage={setLanguage}
          setTask={setTask}
          languages={languages}
          tasks={tasks}
          dark={dark}
        />

        <CodeEditor
          code={code}
          setCode={setCode}
          dark={dark}
        />

        <div className="flex justify-end mt-4">

          <button
            onClick={analyzeCode}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded"
          >
            Run
          </button>

        </div>

        <ResultViewer
          result={result}
          dark={dark}
        />

      </div>

    </div>
  );
}

export default CodeInsight;
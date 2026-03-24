import React from "react";

function LanguageTaskSelector({
  language,
  task,
  setLanguage,
  setTask,
  languages,
  tasks,
  dark
}) {

  return (

    <div className="grid grid-cols-2 gap-4">

      <div className="flex flex-col">

        <label className="text-sm mb-1">
          Programming Language
        </label>

        <select
          value={language}
          onChange={(e)=>setLanguage(e.target.value)}
          className={`border p-2 rounded 
          ${dark ? "bg-gray-700 border-gray-600" : ""}`}
        >

          <option value="">Select</option>

          {languages.map((l)=>(
            <option key={l} value={l}>
              {l}
            </option>
          ))}

        </select>

      </div>


      <div className="flex flex-col">

        <label className="text-sm mb-1">
          Task
        </label>

        <select
          value={task}
          onChange={(e)=>setTask(e.target.value)}
          className={`border p-2 rounded 
          ${dark ? "bg-gray-700 border-gray-600" : ""}`}
        >

          <option value="">Select Task</option>

          {tasks.map((t)=>(
            <option key={t} value={t}>
              {t}
            </option>
          ))}

        </select>

      </div>

    </div>
  );
}

export default LanguageTaskSelector;
import React from "react";

function CodeEditor({ code, setCode, dark }) {

  return (

    <div className="mt-6 flex flex-col">

      <label className="text-sm mb-1">
        Paste Your Code
      </label>

      <textarea
        rows="8"
        placeholder="Paste your code here..."
        value={code}
        onChange={(e)=>setCode(e.target.value)}
        className={`border p-3 rounded font-mono
        ${dark ? "bg-gray-700 border-gray-600" : ""}`}
      />

    </div>
  );
}

export default CodeEditor;
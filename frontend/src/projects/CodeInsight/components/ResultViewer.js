import React from "react";
import ReactMarkdown from "react-markdown";

function ResultViewer({ result, dark }) {

  return (

    <div className={`mt-6 p-4 rounded
    ${dark ? "bg-gray-700" : "bg-gray-100"}`}>

      <h3 className="font-semibold text-lg">
        Result
      </h3>

      <pre className="mt-2 text-sm whitespace-pre-wrap">
        <ReactMarkdown>
          {result}
        </ReactMarkdown>
      </pre>

    </div>

  );
}

export default ResultViewer;
import React from "react";

function InputField({ label, name, type="number", step, dark, onChange }) {
  return (
    <>
      <label className="text-sm mb-1">
        {label}
      </label>

      <input
        type={type}
        name={name}
        step={step}
        onChange={onChange}
        className={`border p-2 rounded 
        ${dark ? "bg-gray-700 border-gray-600" : ""}`}
      />
    </>
  );
}

export default InputField;
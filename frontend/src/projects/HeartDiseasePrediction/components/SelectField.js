import React from "react";

function SelectField({ label, name, options, dark, onChange }) {

  return (
    
    <>
    
      <label className="text-sm mb-1">
        {label}
      </label>

      <select
        name={name}
        onChange={onChange}
        className={`border p-2 rounded 
        ${dark ? "bg-gray-700 border-gray-600" : ""}`}
      >

        <option value="">Select</option>

        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}

      </select>
    </>
  );
}

export default SelectField;
import React from "react";

function Sidebar({ open, setSection, active, dark }) {

  const sections = [
    "Heart Disease Prediction",
    "Code Insight",
    "Movie Recommendation",
    "Section 4"
  ];

  return (

    <aside
      className={`transition-all duration-300
      ${open ? "w-64" : "w-0"}
      ${dark ? "bg-gray-950 text-white" : "bg-gray-200 text-black"}
      overflow-hidden`}
    >

      <ul className="p-4 space-y-2">

        {sections.map((s) => (

          <li
            key={s}
            onClick={() => setSection(s)}
            className={`p-2 rounded cursor-pointer
            ${active === s
              ? "bg-blue-600 text-white"
              : dark
                ? "hover:bg-gray-800"
                : "hover:bg-gray-300"
            }`}
          >
            {s}
          </li>

        ))}

      </ul>

    </aside>

  );
}

export default Sidebar;
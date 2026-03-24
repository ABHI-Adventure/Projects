import React from "react";

function Header({ toggleSidebar, toggleDark, dark, openLogin }){

  return (

    <header className={`flex justify-between items-center p-4 shadow 
    ${dark ? "bg-gray-850 text-white" : "bg-white text-black"}`}>

      <div className="flex items-center gap-4">

        <button onClick={toggleSidebar}>
          ☰
        </button>

        <button onClick={toggleDark}>
          {dark ? "☀️" : "🌙"}
        </button>

      </div>

      <h1 className="text-2xl font-bold text-center">Dashboard</h1>

      <button
        onClick={openLogin}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Login
      </button>

    </header>
  );
}

export default Header;
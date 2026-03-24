import React from "react";

function Footer({ dark }) {

  return (

    <footer
      className={`w-full text-center p-4 border-t
      ${dark ? "bg-gray-900 text-gray-200 border-gray-700"
             : "bg-gray-100 text-gray-800 border-gray-300"}`}
    >

      © 2026 Dashboard -&gt; Abhilash

    </footer>

  );
}

export default Footer;
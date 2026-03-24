import React from "react";

function LoginModal({ close, dark }) {

  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">

      <div className={`p-6 rounded-lg w-80 ${dark ? "bg-gray-900 text-white" : "bg-white text-black"}`}>

        <h2 className="text-lg font-semibold mb-4">
          Login
        </h2>

        <input
          type="text"
          placeholder="Email or Username"
          className={`w-full border p-2 mb-3 rounded ${dark ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300"}`}
        />

        <input
          type="password"
          placeholder="Password"
          className={`w-full border p-2 mb-4 rounded ${dark ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300"}`}
        />

        <div className="flex justify-end gap-2">

          <button
            onClick={close}
            className={`px-3 py-1 rounded ${dark ? "bg-gray-600 text-white" : "bg-gray-400"}`}
          >
            Cancel
          </button>

          <button
            className={`px-3 py-1 rounded ${dark ? "bg-blue-500 text-white" : "bg-blue-500 text-white"}`}
          >
            Login
          </button>

        </div>

      </div>

    </div>

  );
}

export default LoginModal;
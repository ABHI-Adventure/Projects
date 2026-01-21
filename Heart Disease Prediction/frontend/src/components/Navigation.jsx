import React from 'react';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-title">❤️ Heart Disease Predictor</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
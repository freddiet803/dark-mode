import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode.js';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  const clearSession = e => {
    e.preventDefault();
    window.localStorage.clear();
    window.location.reload();
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
      <button onClick={clearSession}>clear session</button>
    </nav>
  );
};

export default Navbar;

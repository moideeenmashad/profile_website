import React, { useState } from "react";
import "./DarkMode.css";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <button onClick={toggleDarkMode} className="btn_outline_primary dark-mode-toggle  mx-1">
      {isDarkMode ? <IoSunny /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;

import React, { useState, useEffect } from "react";
import "../../Assets/Theme/Dark.css";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.add("light-mode");
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.body;
    body.classList.toggle("dark-mode", !isDarkMode);
    body.classList.toggle("light-mode", isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="btn_outline_primary mx-1 text-lg me-2"
    >
      {isDarkMode ? <IoSunny /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;

import React, { useState } from "react";
import "../../Assets/Theme/Dark.css";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // const pRef1 = useRef(null);
  // const pRef2 = useRef(null);
  // useEffect(() => {
  //   if (pRef1.current) {
  //     pRef1.current.classList.toggle("dark-mode-para", isDarkMode);
  //     pRef1.current.classList.toggle("light-mode-para", !isDarkMode);
  //   }
  //   if (pRef2.current) {
  //     pRef2.current.classList.toggle("dark-mode-para", isDarkMode);
  //     pRef2.current.classList.toggle("light-mode-para", !isDarkMode);
  //   }
  // }, [isDarkMode]);

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

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";
import "@/Assets/Theme/Dark.css";

const BackToHome = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <button className="btn_primary" onClick={goToHome}>
        Back to Home
      </button>
    </>
  );
};

export default BackToHome;

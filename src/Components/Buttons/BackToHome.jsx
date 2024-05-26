import React from "react";
import { useNavigate } from "react-router-dom";

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

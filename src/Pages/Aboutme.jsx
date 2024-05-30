import React from "react";
import "./Main.css";
import userData from "../Utils/user_data.json";

const Aboutme = () => {
  return (
    <>
      <div className="about_bg" id="aboutMe">
        <div className="container">
          <div className="row align items-center">
            <div className="col-12 col-md-6 col-lg-6">
              {/* add image here */}
              {/* <img src={userImg} alt="" className="img-fluid" /> */}
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h6 className="sub_title">About Me</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;

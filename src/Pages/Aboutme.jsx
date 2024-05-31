import React from "react";
import "../Assets/Theme/Style.css";
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
              <h6 className="sub_title mb-16">About Me</h6>
              <p className="category_title mb-12">
                {userData && userData.job_role}
              </p>
              <p className="para mb-8"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;

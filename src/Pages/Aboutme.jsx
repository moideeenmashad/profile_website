import React from "react";
import "./Main.css";
import userData from "@/Utils/user_data.json";
// import aboutImg from "@/Assets/img/about_me.png";
const Aboutme = () => {
  return (
    <>
      <div className="about_bg" id="aboutMe">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              {/* add image here */}
              {/* <div className="d-flex justify-content-center">
                <img src={aboutImg} alt="" className="img-fluid" />
              </div> */}
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h6 className="sub_title mb-16">About</h6>
              <p className="category_title mb-12">
                {userData && userData.job_role}
              </p>
              <p className="para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae eius sequi quod ratione animi officiis, cum atque,
                velit sed fugiat non corporis sint sapiente tempore earum
                explicabo, cumque veniam asperiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;

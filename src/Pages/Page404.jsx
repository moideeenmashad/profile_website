import React from "react";
import "../Assets/Theme/Dark.css";
import "./Main.css";
import Navbar from "../Layouts/Navbar/Navbar";
import BackToHome from "../Components/Buttons/BackToHome";

const Page404 = () => {
  return (
    <>
      <Navbar />
      <div className="page404_body">
        <div className="page404_container">
          <div className="page404_content">
            <h1 className="http_respond_title text-color">404</h1>
            <p className="http_respond_sub_title text-color">Page Not Found</p>
            <p className="http_respond_description_text text-color">
              We're sorry, but the page you are looking for does not exist.
            </p>
            <div className="buttons">
              <BackToHome />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;

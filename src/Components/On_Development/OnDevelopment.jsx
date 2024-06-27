import React from "react";
import Marquee from "react-fast-marquee";

const OnDevelopment = () => {
  return (
    <>
      <div className="notice-container">
        <Marquee className="text-center bg-light small p-1 text-dark">
          Please note that this website is currently under development. Some
          features may not be fully functional. Thank you for your
          understanding.
        </Marquee>
      </div>
    </>
  );
};

export default OnDevelopment;

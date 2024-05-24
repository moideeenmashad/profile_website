import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { IoArrowUp } from "react-icons/io5";
import "./ScrollUp.css";

const ScrollUp = () => {
  return (
    <ScrollToTop
      smooth
      top={20}
      component={
        <div className="icon-wrapper">
          <IoArrowUp className="icon_up" />
        </div>
      }
      className="scroll-to-top"
    />
  );
};

export default ScrollUp;

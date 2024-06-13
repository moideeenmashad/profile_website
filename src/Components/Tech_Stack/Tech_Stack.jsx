import React from "react";
import "./Tech_Stack.css";
import "@/Assets/Theme/Dark.css";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiSass,
  SiVite,
  SiNodedotjs,
  SiNpm,
} from "react-icons/si";

const frontendTools = [
  { techIcon: <SiHtml5 /> },
  { techIcon: <SiCss3 /> },
  { techIcon: <SiJavascript /> },
  { techIcon: <SiBootstrap /> },
  { techIcon: <SiReact /> },
  { techIcon: <SiSass /> },
  { techIcon: <SiVite /> },
  { techIcon: <SiNodedotjs /> },
  { techIcon: <SiNpm /> },
];
const Tech_Stack = () => {
  return (
    <>
      <div className="row g-3 align-items-center">
        <div className="col-4 col-md-3 col-lg-2">
          <div className="d-flex align-items-center">
            <h6 className="me-16">Tech Stack</h6>
            <div className="vl"></div>
          </div>
        </div>
        {frontendTools.map((value, key) => {
          return (
            <div className="col-2 col-md-2 col-lg-1 justify-content-center">
              <span className="tech_stack_icon">{value.techIcon}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tech_Stack;

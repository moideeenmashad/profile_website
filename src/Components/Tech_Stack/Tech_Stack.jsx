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
  { id: 1, techIcon: <SiHtml5 /> },
  { id: 2, techIcon: <SiCss3 /> },
  { id: 3, techIcon: <SiJavascript /> },
  { id: 4, techIcon: <SiBootstrap /> },
  { id: 5, techIcon: <SiReact /> },
  { id: 6, techIcon: <SiSass /> },
  { id: 7, techIcon: <SiVite /> },
  { id: 8, techIcon: <SiNodedotjs /> },
  { id: 9, techIcon: <SiNpm /> },
];

const Tech_Stack = () => {
  return (
    <div className="row g-3 align-items-center">
      <div className="col-4 col-md-3 col-lg-2">
        <div className="d-flex align-items-center">
          <h6 className="me-16">Tech Stack</h6>
          <div className="vl"></div>
        </div>
      </div>
      {frontendTools.map((tool) => (
        <div
          key={tool.id}
          className="col-2 col-md-2 col-lg-1 justify-content-center"
        >
          <span className="tech_stack_icon">{tool.techIcon}</span>
        </div>
      ))}
    </div>
  );
};

export default Tech_Stack;

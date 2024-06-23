import React from "react";
import Introduction from "./Introduction";
import ScrollUp from "@/Components/Scroll_To_Top/ScrollUp";
import Navbar from "@/Layouts/Navbar/Navbar";
import ProgressBar from "@/Components/Progress_Bar/ProgressBar";
import Aboutme from "./Aboutme";
import Project from "./Project";
import Contactme from "./Contactme";
// import Alert from "@/Components/Alert/Alert";
const Main = () => {
  return (
    <>
      <Navbar />
      <ProgressBar />
      <Introduction />
      {/* <Alert /> */}
      <Aboutme />
      <Project />
      <Contactme />
      <ScrollUp />
    </>
  );
};

export default Main;

import React from "react";
import Introduction from "./Introduction";
import ScrollUp from "@/Components/Scroll_To_Top/ScrollUp";
import Navbar from "@/Layouts/Navbar/Navbar";
import ProgressBar from "@/Components/Progress_Bar/ProgressBar";
import Aboutme from "./Aboutme";
import Project from "./Project";
import Contactme from "./Contactme";
import Footer from "@/Layouts/Footer/Footer";
const Main = () => {
  return (
    <>
      <Navbar />
      <ProgressBar />
      <Introduction />
      <Aboutme />
      <Project />
      <Contactme />
      <ScrollUp />
      <Footer />
    </>
  );
};

export default Main;

import React from "react";
import Introduction from "./Introduction";
import ScrollUp from "../Components/Scroll_To_Top/ScrollUp";
import Navbar from "../Layouts/Navbar/Navbar";
import ProgressBar from "../Components/Progress_Bar/ProgressBar";
import Aboutme from "./Aboutme";
import ContactForm from "../Components/Forms/ContactForm";
const Main = () => {
  return (
    <>
      <Navbar />
      <ProgressBar />
      <Introduction />
      <Aboutme />
      <ContactForm />
      <ScrollUp />
    </>
  );
};

export default Main;

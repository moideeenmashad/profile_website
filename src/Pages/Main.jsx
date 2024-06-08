import React from "react";
import Introduction from "./Introduction";
import ScrollUp from "@/Components/Scroll_To_Top/ScrollUp";
import Navbar from "@/Layouts/Navbar/Navbar";
import ProgressBar from "@/Components/Progress_Bar/ProgressBar";
import ContactForm from "@/Components/Forms/ContactForm";
import Aboutme from "./Aboutme";
import Alert from "@/Components/Alert/Alert";
const Main = () => {
  return (
    <>
      <Navbar />
      <ProgressBar />
      <Introduction />
      <ContactForm/>
      <Alert />
      <Aboutme />
      <ScrollUp />
    </>
  );
};

export default Main;

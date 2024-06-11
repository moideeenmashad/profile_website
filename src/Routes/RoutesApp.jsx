import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "@/Pages/Main";
import Page404 from "@/Pages/Page404";

const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="*" exact element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesApp;

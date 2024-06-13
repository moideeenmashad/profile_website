import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "@/Pages/Page404";
import { lazy, Suspense } from "react";
import Loader from "@/Components/Loader/Loader";

const Main = lazy(() => import("@/Pages/Main"));
const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="*" exact element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default RoutesApp;

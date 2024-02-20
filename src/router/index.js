import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Infomation from "./pages/infomation";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Infomation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

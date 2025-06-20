import React from "react";
import { Route, Routes } from "react-router-dom";
import Advice from "../pages/Advice";
import Home from "../pages/Home";
import Fortune2 from "../pages/Fortune2";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Advice" element={<Advice />} />
      <Route path="/Fortune2" element={<Fortune2 />} />
    </Routes>
  );
};

export default Router;

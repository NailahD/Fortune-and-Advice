import React from "react";
import { Route, Routes } from "react-router-dom";
import Advice from "../pages/Advice";
import Home from "../pages/Home";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Advice" element={<Advice />} />
    </Routes>
  );
};

export default Router;

import React from "react";
import { Outlet } from "react-router-dom";
import MarqueeCom from "../components/TestRejimi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <MarqueeCom />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

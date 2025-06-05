import React from "react";
import { Outlet } from "react-router";
import Navbar from "../sheared/Navbar";
import Footer from "../sheared/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto py-12 min-h-[calc(100vh-117px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

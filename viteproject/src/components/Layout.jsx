import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import lightBg from "../assets/light-bg.jpg";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "#f5faff", backgroundSize: "cover" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

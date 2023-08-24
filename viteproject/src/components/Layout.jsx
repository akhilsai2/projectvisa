import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";

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

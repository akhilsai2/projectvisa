import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ marginTop: "0px" }}>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

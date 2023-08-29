import { Suspense } from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";

const Layout = () => {
  console.log("Home");
  return (
    <div style={{ backgroundColor: "#f5faff", backgroundSize: "cover" }}>
      <Header />
      <div>
        <Suspense fallback={"Loading"}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

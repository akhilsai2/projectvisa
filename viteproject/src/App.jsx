import "./App.css";
import "./assets/style.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Service from "./components/service/service";
import { Story } from "./components/About/story";
import Layout from "./components/Layout";
import Contact from "./components/Contact/contact";
import { useLayoutEffect } from "react";
import Trainings from "./components/service/Traning/trainings";
import Study from "./components/Studies/study";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<Story />} />
              <Route path="studies" element={<Study />} />
              <Route path="trainings" element={<Trainings />} />
              <Route path="services" element={<Service />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;

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
// import Footer from "./components/footer/footer";
// import Card from "./components/card/card";
// import Flagscard from "./components/flagscrad/flagscard";
import Service from "./components/service/service";
import Studyuk from "./components/Studies/studyuk";
import Studyusa from "./components/Studies/studyusa";
import Studyeurope from "./components/Studies/studyeurope";
import Studyaustralia from "./components/Studies/studyaustralia";
import Studycanada from "./components/Studies/studycanada";
import Studynewzealand from "./components/Studies/studynewzealand";
import { Story } from "./components/About/story";
import { CoreTeam } from "./components/About/story";
import About from "./pages/About/About";
import Layout from "./components/Layout";
import PartnerUniversities from "./pages/PartnerUniversities/PartnerUniversities";
import Contact from "./components/Contact/contact";
import { useLayoutEffect } from "react";
import Trainings from "./components/service/Traning/trainings";

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
              <Route index path="/" element={<Home />} />
              <Route path="about/">
                <Route index element={<About />} />
                <Route path="i20" element={<Story />} />
                <Route path="coreteam" element={<CoreTeam />} />
              </Route>
              <Route
                path="partner-universities"
                element={<PartnerUniversities />}
              />
              <Route path="studies/">
                <Route path="uk" element={<Studyuk />} />
                <Route path="usa" element={<Studyusa />} />
                <Route path="europe" element={<Studyeurope />} />
                <Route path="australia" element={<Studyaustralia />} />
                <Route path="canada" element={<Studycanada />} />
                <Route path="newzealand" element={<Studynewzealand />} />
              </Route>
              <Route path="trainings" element={<Trainings />}></Route>
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

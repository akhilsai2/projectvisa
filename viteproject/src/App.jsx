import "./App.css";
import "./assets/style.css";
import Header from "./components/header";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Card from "./components/card/card";
import Flagscard from "./components/flagscrad/flagscard";
import Servicelayes from "./components/service/service";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
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
            <Route path="services/">
              <Route path="admissioncounselling" element={<Servicelayes />} />
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

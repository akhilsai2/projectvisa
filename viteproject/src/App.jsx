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
import Studyuk from "./components/Studies/studyuk";
import Studyusa from "./components/Studies/studyusa";
import Studyeurope from "./components/Studies/studyeurope";
import Studyaustralia from "./components/Studies/studyaustralia";
import Studycanada from "./components/Studies/studycanada";
import Studynewzealand from "./components/Studies/studynewzealand";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="studies/">
            <Route path="uk" element={<Studyuk />} />
            <Route path="usa" element={<Studyusa />} />
            <Route path="europe" element={<Studyeurope />} />
            <Route path="australia" element={<Studyaustralia />} />
            <Route path="canada" element={<Studycanada />} />
            <Route path="newzealand" element={<Studynewzealand />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

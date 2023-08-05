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

function App() {
  return (
    <>
      {/* <div className="bg-cont">
        <Header />
      </div> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

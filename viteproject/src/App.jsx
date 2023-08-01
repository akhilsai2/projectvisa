import "./App.css";
import "./assets/style.css";
import Header from "./components/header";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import "font-awesome/css/font-awesome.min.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="bg-cont">
        <Header />
      </div>
    </>
  );
}

export default App;

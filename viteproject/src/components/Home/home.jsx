import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module

import Carousel from "./Carousel";
import WelcomeSection from "./WelcomeSection";


const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }}>

      <Carousel />
      <WelcomeSection/>

    </div>
  );
};

export default Home;

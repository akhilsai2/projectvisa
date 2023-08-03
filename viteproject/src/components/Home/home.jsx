import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module

import Carousel from "./Carousel";
import WelcomeSection from "./WelcomeSection";
import TestimonialCarousel from "./TestimonialCarousel";


const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }}>

      <Carousel />
      <WelcomeSection/>
      <TestimonialCarousel/>

    </div>
  );
};

export default Home;

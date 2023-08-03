// import * as mdb from "mdb-ui-kit"; // lib
// import { Input } from "mdb-ui-kit"; // module
// import { Animation } from "react-easy-animations";
// import { Typewriter } from "react-simple-typewriter";

import Carousel from "./Carousel";
import WelcomeSection from "./WelcomeSection";
import TestimonialCarousel from "./TestimonialCarousel";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          right: "0%",
          bottom: "0%",
          zIndex: "2",
          marginTop: "15vh",
        }}
        className="nameCont"
      >
        <h1 className="name">
          <span className="intial">
            {/* <Typewriter
              words={["DREAM2DE"]}
              loop={200}
              cursor
              cursorStyle="|"
              cursorBlinking={false}
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1000}
            /> */}
            DREAM2DE.
          </span>
        </h1>
        <p className="cap">
          {"Empowering Dreams,Embracing Diversity, Expanding Horizons."}
        </p>
        <h1 className="name">GREE</h1>
        <button>READ MORE</button>
        {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "30%",
              marginTop: "30px",
            }}
          >
            <a
              href="https://www.facebook.com/akhil.sai.92123/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook  className="link" />
            </a>
            <a
              href="https://github.com/akhilsai2"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="link" />
            </a>
            <a
              href="https://www.linkedin.com/in/venkatasaiakhil/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="link" />
            </a>
          </div> */}
      </div>

      <Carousel />
      <TestimonialCarousel />

      <WelcomeSection />
    </div>
  );
};

export default Home;

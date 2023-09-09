import React from "react";
import WelcomeSection from "./WelcomeSection";
import Flagscard from "./flagscrad/flagscard";
import { Animation } from "react-easy-animations";
import Card from "./card/card";
import { useNavigate } from "react-router-dom";
import CarouselItem from "./Carousel";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          zIndex: "2",
          marginTop: "35vh",
        }}
        className="name-cont w-100"
      >
        <Animation
          type="fadeInFromBottom"
          duration="900ms"
          delay="0.2s"
          direction="normal"
          timing="ease-in-out"
          iteration="1"
          fillMode="none"
          className="text-center slideText"
        >
          <h1 className="name">
            <span className="intial">
              <span style={{ color: "white" }}>Explore</span>Nex.
            </span>
          </h1>
          <p className="cap">
            {"Empowering Dreams,Embracing Diversity, Expanding Horizons."}
          </p>
          <button
            className="customBtn rounded-5 text-weight-bold"
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#014585",
              backgroundColor: "white",
              letterSpacing: "1px",
            }}
            onClick={() => navigate("/about")}
          >
            READ MORE
          </button>
        </Animation>
      </div>

      <CarouselItem />
      {/* <CounterSection /> */}
      <div className="px-md-2">
        <WelcomeSection />
        {/* <TestimonialCarousel /> */}
        {/* <FormSection /> */}
      </div>
      <Flagscard />
      <div className="px-3">
        <Card />
      </div>
    </div>
  );
};

export default Home;

import * as mdb from "mdb-ui-kit";
import { Input } from "mdb-ui-kit";
import React, { useState } from "react";
import WelcomeSection from "./WelcomeSection";
import TestimonialCarousel from "./TestimonialCarousel";
import Flagscard from "./flagscrad/flagscard";
import { Animation } from "react-easy-animations";
import Card from "./card/card";
import { Dock } from "primereact/dock";

import instaLogo from "../../assets/instagram.png";
import whatsLogo from "../../assets/whatsapp.png";
import facebookLogo from "../../assets/facebook.png";
import twitterLogo from "../../assets/twitter.png";
import FormSection from "./FormSection";
import ChatBot from "../ChatBot/ChatBot";
import { AiOutlineMessage } from "react-icons/ai";
import CounterSection from "./CounterSection/CounterSection";
import { useNavigate } from "react-router-dom";
const Carousel = React.lazy(() => import("./Carousel"));
// import "./DockDemo.css";
const Home = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Finder",
      icon: () => <img alt="Finder" src={instaLogo} width="60%" />,
    },
    {
      label: "App Store",
      icon: () => <img alt="App Store" src={whatsLogo} width="60%" />,
    },
    {
      label: "Photos",
      icon: () => <img alt="Photos" src={facebookLogo} width="60%" />,
    },
    {
      label: "Trash",
      icon: () => <img alt="trash" src={twitterLogo} width="60%" />,
    },
  ];
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotToggle = () => {
    setShowChatbot(!showChatbot);
  };

  // React.useEffect(() => {
  //   const reloadCount = sessionStorage.getItem("reloadCount");
  //   if (reloadCount < 2) {
  //     sessionStorage.setItem("reloadCount", String(reloadCount + 1));
  //     window.location.reload();
  //   } else {
  //     sessionStorage.removeItem("reloadCount");
  //   }
  // }, []);

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
            <span className="intial">ExploreNex.</span>
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

      <Carousel />
      {/* <CounterSection /> */}
      <div className="px-md-5">
        <WelcomeSection />
        <TestimonialCarousel />
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

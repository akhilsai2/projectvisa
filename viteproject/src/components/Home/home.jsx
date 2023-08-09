import * as mdb from "mdb-ui-kit";
import { Input } from "mdb-ui-kit";
import React, { useState } from "react";
import WelcomeSection from "./WelcomeSection";
import TestimonialCarousel from "./TestimonialCarousel";
import Flagscard from "../flagscrad/flagscard";
import { Animation } from "react-easy-animations";
import Card from "../card/card";
import { Dock } from "primereact/dock";

import instaLogo from "../../assets/instagram.png";
import whatsLogo from "../../assets/whatsapp.png";
import facebookLogo from "../../assets/facebook.png";
import twitterLogo from "../../assets/twitter.png";
import FormSection from "./FormSection";
import ChatBot from "../ChatBot/ChatBot";
import { AiOutlineMessage } from "react-icons/ai";
const Carousel = React.lazy(() => import("./Carousel"));
// import "./DockDemo.css";
const Home = () => {
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

  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "between",
          alignItems: "center",
          position: "absolute",
          zIndex: "2",
          marginTop: "25vh",
        }}
        className="nameCont w-100"
      >
        {/* <Dock
          model={items}
          position="left"
          className="ms-3 border-0 bg-none"
          style={{ position: "fixed" }}
        /> */}
        <Animation
          type="fadeInFromBottom"
          duration="1000ms"
          delay="0.3s"
          direction="normal"
          timing="ease-in-out"
          iteration="1"
          fillMode="none"
          className="text-center d-inline"
        >
          <h1 className="name">
            <span className="intial">DREAM2DE.</span>
          </h1>
          <p className="cap">
            {"Empowering Dreams,Embracing Diversity, Expanding Horizons."}
          </p>
          <h1 className="name">GREE</h1>
          <button
            className="customBtn rounded-5 text-weight-bold"
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#014585",
              backgroundColor: "white",
              letterSpacing: "1px",
            }}
          >
            READ MORE
          </button>
        </Animation>
      </div>

      <Carousel />
      <WelcomeSection />
      <TestimonialCarousel />
      <FormSection />
      <Flagscard />
      <Card />
      {/* <button className="chat-icon" onClick={handleChatbotToggle}>
        <AiOutlineMessage />
      </button> */}
      {/* {showChatbot && <ChatBot/>} */}
    </div>
  );
};

export default Home;

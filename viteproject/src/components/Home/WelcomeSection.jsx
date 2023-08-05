import React from "react";
import { Animation } from "react-easy-animations";
import "./home.css";

const WelcomeSection = () => {
  return (
    <div className="flex  justify-content-between align-items-center welcome-section-cont w-100">
      <Animation
        type="fadeInFromLeft"
        duration="1000ms"
        delay="4s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
        className="col-6"
      >
        <img
          src="https://cdn.pixabay.com/photo/2022/04/17/21/57/international-7139072_1280.png"
          alt="degree"
          // className="col-6  rounded-circle"
          style={{ width: "550px" }}
          className="rounded-circle"
        />
      </Animation>
      <Animation
        type="fadeInFromRight"
        duration="1000ms"
        delay="4s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
        className="col-6"
      >
        <div className="flex flex-column  welcome-section-headings">
          <p
            style={{
              fontSize: "25px",
              letterSpacing: "2px",
              fontStyle: "italic",
              fontFamily: "Times New Roman",
              fontWeight: "600",
            }}
          >
            Welcome To
          </p>
          <h1
            style={{
              fontSize: "50px",
              letterSpacing: "2px",
              fontStyle: "italic",
              fontFamily: "Times New Roman",
              fontWeight: "600",
            }}
          >
            DREAM2DEGREE
          </h1>
          <h3
            style={{
              fontSize: "30px",
              letterSpacing: "2px",
              fontFamily: "Times New Roman",
              fontWeight: "600",
            }}
          >
            Your Gateway to Global Education!
          </h3>
          <p
            className="text-center"
            style={{
              fontSize: "20px",
              letterSpacing: "2px",
              fontFamily: "Times New Roman",
              fontWeight: "600",
            }}
          >
            At Dream2Degree, we understand that studying abroad can be a
            life-changing experience, opening up a world of opportunities and
            shaping your future in remarkable ways. Our consultancy is dedicated
            to making this dream a reality for students like you who aspire to
            pursue higher education in countries renowned for their academic
            excellence and cultural diversity, such as Australia, the UK, USA,
            Canada, Ireland, and New Zealand.
          </p>
        </div>
      </Animation>
    </div>
  );
};

export default WelcomeSection;

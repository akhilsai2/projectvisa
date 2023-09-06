import React from "react";
import { Animation } from "react-easy-animations";
import decision from "../../assets/decision.png";
import priority from "../../assets/priorities.png";
import support from "../../assets/support.png";
import influencer from "../../assets/influencer.png";
import studyAb from "../../assets/study abroad image.png";

import "./home.css";
import FormData from "../form";

const WelcomeSection = () => {
  return (
    <div className="welcome-section-cont">
      <div className=" welcomeMobile w-100 ">
        <Animation
          type="fadeInFromLeft"
          duration="1000ms"
          delay="1.5s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
          className="col-md-6"
        >
          <div className="col-12 col-md-6 w-100 h-100">
            <img
              src={studyAb}
              alt="degree"
              style={{
                width: "100%",
                height: "100%",
              }}
              className="rounded-5 welcomeImg "
            />
          </div>
        </Animation>
        <Animation
          type="fadeInFromTop"
          duration="1000ms"
          delay="1.5s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
          className="col-md-6"
        >
          <div className="flex flex-column justify-content-center align-items-center w-100 welcome-section-headings lh-lg col-12 col-md-6">
            <p className="welcome">Welcome to Your Global Journey with </p>
            <h1 className="welcome-head">EXPLORENEX</h1>
            <h3 className="welcome-head1">Your Gateway to Global Education!</h3>
            <p
              style={{ textAlign: "justify" }}
              className=" lh-base welcome-para"
            >
              Are you ready to embark on an enriching educational adventure that
              transcends borders? At EXPLORENEX, we are your trusted partners in
              turning your dreams of studying abroad into a reality. As a
              leading study abroad consultancy, we're dedicated to guiding you
              every step of the way, ensuring you have a seamless and
              unforgettable international learning experience.
            </p>
          </div>
        </Animation>
      </div>
      <div className="d-flex flex-wrap align-items-start justify-content-between">
        <div className="mt-4 col-12 col-md-6 col-lg-8">
          <div className="mb-2">
            <span
              style={{
                fontSize: "28px",
                letterSpacing: "1px",
                fontWeight: "700",
                color: "#014585",
                textAlign: "center",
                width: "100%",
              }}
            >
              Why Choose ExploreNex?
            </span>
          </div>

          <Animation
            type="fadeInFromLeft"
            duration="1000ms"
            delay="2s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
            className="w-100"
          >
            <div className="flex justify-content-start align-items-center">
              <img
                src={decision}
                alt="decision"
                className="mb-3"
                style={{ width: "50px" }}
              />
              <div>
                <p className="para">
                  <span
                    className="text-decoration-underline"
                    style={{ fontWeight: "600" }}
                  >
                    Personalized Guidance :-
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "17px",
                      color: "#4a4a4a",
                    }}
                  >
                    We believe that every student is unique, with distinct
                    aspirations and academic backgrounds. Our team of
                    experienced education consultants is committed to providing
                    personalized counseling tailored to your individual needs
                    and preferences.
                  </span>
                </p>
              </div>
            </div>
          </Animation>

          <Animation
            type="fadeInFromLeft"
            duration="1000ms"
            delay="2.5s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
            className="w-100"
          >
            <div className="flex justify-content-start align-items-center">
              <img
                src={influencer}
                alt="decision"
                className=" mb-3"
                style={{ width: "50px" }}
              />
              <div>
                <p className="para">
                  <span
                    className="text-decoration-underline"
                    style={{ fontWeight: "600" }}
                  >
                    Expert Advice :-
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "17px",
                      color: "#4a4a4a",
                    }}
                  >
                    Navigating the intricacies of studying abroad can be
                    overwhelming. Our team of seasoned experts provides you with
                    comprehensive insights into application processes,
                    scholarships, visa assistance, and more. We're here to
                    ensure you're well-informed and confident at every stage.
                  </span>
                </p>
              </div>
            </div>
          </Animation>

          <Animation
            type="fadeInFromLeft"
            duration="1000ms"
            delay="2.75s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
            className="w-100"
          >
            <div className="flex justify-content-start align-items-center">
              <img
                src={support}
                alt="decision"
                className=" mb-3"
                style={{ width: "50px" }}
              />
              <div>
                <p className="para">
                  <span
                    className="text-decoration-underline"
                    style={{ fontWeight: "600" }}
                  >
                    Comprehensive Services :-
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "17px",
                      color: "#4a4a4a",
                    }}
                  >
                    From the moment you step through our virtual doors or
                    contact us, we accompany you on your journey to studying
                    abroad. Our comprehensive range of services includes
                    university selection, application assistance, visa guidance,
                    test preparation, and financial aid support.
                  </span>
                </p>
              </div>
            </div>
          </Animation>
          <br />
          <Animation
            type="fadeInFromLeft"
            duration="1000ms"
            delay="2.75s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
            className="w-100"
          >
            <div className="flex justify-content-start align-items-center">
              <img
                src={support}
                alt="decision"
                className=" mb-3"
                style={{ width: "50px" }}
              />
              <div>
                <p className="para">
                  <span
                    className="text-decoration-underline"
                    style={{ fontWeight: "600" }}
                  >
                    Cultural Immersion:-
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "17px",
                      color: "#4a4a4a",
                    }}
                  >
                    Beyond academics, studying abroad offers a chance to broaden
                    your horizons culturally. Immerse yourself in new
                    traditions, languages, and experiences, fostering personal
                    growth that goes beyond the classroom.
                  </span>
                </p>
              </div>
            </div>
          </Animation>
          <br />
          <Animation
            type="fadeInFromLeft"
            duration="1000ms"
            delay="3s"
            direction="ease"
            timing="ease"
            iteration="1"
            fillMode="none"
            className="w-100"
          >
            <div className="flex justify-content-start align-items-center">
              <img
                src={priority}
                alt="decision"
                className=" mb-3"
                style={{ width: "50px" }}
              />
              <div>
                <p className="para">
                  <span
                    className="text-decoration-underline"
                    style={{ fontWeight: "600" }}
                  >
                    Your Success is Our Priority :-
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "17px",
                      color: "#4a4a4a",
                    }}
                  >
                    {" "}
                    Your dreams are important to us, and your success is our
                    ultimate goal. At Dream2Degree, we take pride in empowering
                    you with the knowledge and tools necessary to make informed
                    decisions about your academic and professional future.
                  </span>
                </p>
              </div>
            </div>
          </Animation>
          <br />
          <Animation
            type="fadeInFromLeft"
            duration="1000ms"
            delay="3s"
            direction="ease"
            timing="ease"
            iteration="1"
            fillMode="none"
            className="w-100"
          >
            <div className="flex justify-content-start align-items-center">
              <img
                src={priority}
                alt="decision"
                className=" mb-3"
                style={{ width: "50px" }}
              />
              <div>
                <p className="para">
                  <span
                    className="text-decoration-underline"
                    style={{ fontWeight: "600" }}
                  >
                    Success Stories :-
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "17px",
                      color: "#4a4a4a",
                    }}
                  >
                    {" "}
                    Our success is measured by the success of our students.
                    Explore inspiring stories of those who have embarked on
                    their international journeys with us, achieving milestones
                    and creating lasting memories.
                  </span>
                </p>
              </div>
            </div>
          </Animation>
        </div>
        <div className="mt-4 col-12 col-md-6 col-lg-4">
          <h3 className="fw-bold" style={{ color: "#014585" }}>
            Start Your Journey Today!
          </h3>
          <p
            style={{
              fontSize: "15px",
              color: "#4a4a4a",
            }}
          >
            Join the ranks of ambitious students who have trusted [Your
            Consultancy Name] to guide them on their educational odysseys. Your
            global adventure begins with a single step – contact us today to
            explore the endless possibilities that await you. Ready to embrace
            the world? Let's make your study abroad dreams a reality!
          </p>
          <FormData mobile={false} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

import React from "react";
import { Animation } from "react-easy-animations";
import decision from "../../assets/decision.png";
import priority from "../../assets/priorities.png";
import support from "../../assets/support.png";
import influencer from "../../assets/influencer.png";
import "./home.css";

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
          <img
            src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDgyLW1rLTU4MDQtMDFfMy5qcGc.jpg"
            alt="degree"
            // className="col-6  rounded-circle"
            style={{
              width: "500px",
              boxShadow: "0px 4px 16px 0px #bfbfbf",
            }}
            className="rounded-5 welcomeImg"
          />
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
          <div className="flex flex-column justify-content-center align-items-center  welcome-section-headings lh-lg">
            <p className="welcome">Welcome To</p>
            <h1 className="welcome-head">DREAM2DEGREE</h1>
            <h3 className="welcome-head1">Your Gateway to Global Education!</h3>
            <p className="text-center lh-base welcome-para">
              At Dream2Degree, we understand that studying abroad can be a
              life-changing experience, opening up a world of opportunities and
              shaping your future in remarkable ways. Our consultancy is
              dedicated to making this dream a reality for students like you who
              aspire to pursue higher education in countries renowned for their
              academic excellence and cultural diversity, such as Australia, the
              UK, USA, Canada, Ireland, and New Zealand.
            </p>
          </div>
        </Animation>
      </div>
      <div className="mt-4">
        <div className="mb-2">
          <span
            style={{
              fontSize: "28px",
              letterSpacing: "1px",
              fontWeight: "700",
              color: "#014585",
            }}
          >
            Why Choose Dream2Degree?
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
                  aspirations and academic backgrounds. Our team of experienced
                  education consultants is committed to providing personalized
                  counseling tailored to your individual needs and preferences.
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
                  Navigating the complexities of international education can be
                  daunting, but with Dream2Degree, you have access to a team of
                  experts well-versed in the admission processes, visa
                  requirements, and study options in various countries. We keep
                  ourselves up-to-date with the latest trends to offer you the
                  best advice.
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
                  From the moment you step through our virtual doors or contact
                  us, we accompany you on your journey to studying abroad. Our
                  comprehensive range of services includes university selection,
                  application assistance, visa guidance, test preparation, and
                  financial aid support.
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
      </div>
    </div>
  );
};

export default WelcomeSection;

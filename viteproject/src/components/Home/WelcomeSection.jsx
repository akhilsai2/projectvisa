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
      <div className=" welcomeMobile ">
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
          type="fadeInFromRight"
          duration="1000ms"
          delay="1.5s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
          className="col-md-6"
        >
          <div className="flex flex-column  welcome-section-headings lh-lg">
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
      <div className="mt-5">
        <div className="mb-3">
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
          delay="1.75s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <div className="flex justify-content-around align-items-center">
            <img
              src={decision}
              alt="decision"
              className="me-4 mb-3"
              style={{ width: "50px" }}
            />
            <div>
              <p className="para text-decoration-underline">
                Personalized Guidance :-
              </p>
              <p
                className="para  font-weight-bold "
                style={{ fontSize: "18px", color: "#4a4a4a" }}
              >
                {" "}
                We believe that every student is unique, with distinct
                aspirations and academic backgrounds. Our team of experienced
                education consultants is committed to providing personalized
                counseling tailored to your individual needs and preferences.
              </p>
            </div>
          </div>
        </Animation>

        <Animation
          type="fadeInFromRight"
          duration="1000ms"
          delay="2s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <div className="flex justify-content-around align-items-center">
            <img
              src={influencer}
              alt="decision"
              className="me-4 mb-3"
              style={{ width: "50px" }}
            />
            <div>
              <p className="para text-decoration-underline">Expert Advice :-</p>
              <p
                className=" para  font-weight-bold "
                style={{ fontSize: "18px", color: "#4a4a4a" }}
              >
                {" "}
                Navigating the complexities of international education can be
                daunting, but with Dream2Degree, you have access to a team of
                experts well-versed in the admission processes, visa
                requirements, and study options in various countries. We keep
                ourselves up-to-date with the latest trends to offer you the
                best advice.
              </p>
            </div>
          </div>
        </Animation>

        <Animation
          type="fadeInFromLeft"
          duration="1000ms"
          delay="2.25s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <div className="flex justify-content-around align-items-center">
            <img
              src={support}
              alt="decision"
              className="me-4 mb-3"
              style={{ width: "50px" }}
            />
            <div>
              <p className="para text-decoration-underline">
                Comprehensive Services :-
              </p>
              <p
                className=" para  font-weight-bold "
                style={{ fontSize: "18px", color: "#4a4a4a" }}
              >
                {" "}
                From the moment you step through our virtual doors or contact
                us, we accompany you on your journey to studying abroad. Our
                comprehensive range of services includes university selection,
                application assistance, visa guidance, test preparation, and
                financial aid support.
              </p>
            </div>
          </div>
        </Animation>
        <br />
        <Animation
          type="fadeInFromRight"
          duration="1000ms"
          delay="2.50s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <div className="flex justify-content-around align-items-center">
            <img
              src={priority}
              alt="decision"
              className="me-4 mb-3"
              style={{ width: "50px" }}
            />
            <div>
              <p className="para text-decoration-underline">
                Your Success is Our Priority :-
              </p>
              <p
                className=" para  font-weight-bold "
                style={{ fontSize: "18px", color: "#4a4a4a" }}
              >
                {" "}
                Your dreams are important to us, and your success is our
                ultimate goal. At Dream2Degree, we take pride in empowering you
                with the knowledge and tools necessary to make informed
                decisions about your academic and professional future.
              </p>
            </div>
          </div>
        </Animation>
      </div>
    </div>
  );
};

export default WelcomeSection;

import React from "react";
import "./studies.css";
const Studyusa = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        className="flex justify-content-center align-items-end"
        style={{
          position: "absolute",
          zIndex: "1000",
          height: "30vh",
          width: "50%",
        }}
      >
        <h1 className="study_heading">
          <span className="pipe">|</span>United States of America
        </h1>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/18/19/04/graduation-995042_1280.jpg"
        className="study_bg"
      />
      <div className="p-0 ">
        <div className="row">
          <div className="flex flex-column justify-content-between align-items-center align-self-start col-sm-12 col-md-4">
            <img
              src="https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990_1280.jpg"
              style={{
                width: "90%",
                boxShadow: "0px 4px 16px 0px #bfbfbf",
              }}
              className="rounded-5 mt-2 mb-5"
            />
            <form className="form submitformweb">
              <div className="flex">
                <label>
                  <input
                    className="input"
                    type="text"
                    placeholder=""
                    required=""
                  />
                  <span>first name</span>
                </label>

                <label>
                  <input
                    className="input"
                    type="text"
                    placeholder=""
                    required=""
                  />
                  <span>last name</span>
                </label>
              </div>

              <label>
                <input
                  className="input"
                  type="email"
                  placeholder=""
                  required=""
                />
                <span>email</span>
              </label>

              <label>
                <input
                  className="input"
                  placeholder=""
                  type="tel"
                  required=""
                />
                <span>contact number</span>
              </label>
              <label>
                <input
                  className="input"
                  placeholder=""
                  type="text"
                  required=""
                  value="USA"
                />
                <span>country</span>
              </label>
              <label>
                <textarea
                  className="input01"
                  placeholder=""
                  rows="3"
                  required=""
                ></textarea>
                <span>message</span>
              </label>

              <button href="#" className="fancy">
                <span className="top-key"></span>
                <span className="text">submit</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </button>
            </form>
          </div>
          <div className="flex flex-column justify-content-start align-items-start col-sm-12 col-md-8 pe-4 ps-4">
            <h2 style={{ fontWeight: "700" }}>Why USA ?</h2>
            <h4 style={{ fontStyle: "italic", textDecoration: "underline" }}>
              United States - Unlock Your Potential in a Land of Opportunities:
            </h4>
            <p
              style={{
                fontSize: "15px",
                textAlign: "left",
                letterSpacing: "1px",
                lineHeight: "1.5",
              }}
            >
              The United States is renowned as an educational hub, celebrated
              for its prestigious universities, exceptional academic system,
              cultural diversity, and abundant prospects. Here are the prime
              factors that make studying in the USA an unparalleled choice for
              your educational journey:
              <br />
              1. Global Reputation and Excellence: The USA's educational
              reputation is unmatched, ensuring world-class teaching and
              groundbreaking research opportunities.
              <br />
              2. Pioneering Technology and Research: With a reputation as a
              technology leader, US universities provide students with
              unprecedented chances to collaborate on innovative projects and
              contribute to cutting-edge research.
              <br />
              3.Tailored Course Selection: Benefit from an array of
              undergraduate and graduate programs that allow you to personalize
              your education by selecting courses across diverse disciplines.
              <br />
              4. Thriving Research Environment: The USA's commitment to
              research-based education provides a fertile ground for research
              enthusiasts to flourish and make impactful contributions.
              <br />
              5. Intimate Class Settings: Experience the advantage of small
              class sizes (15-20 students) that foster personalized attention
              and practical, hands-on learning experiences.
              <br />
              6. Lucrative Employment Prospects: A degree earned in the USA
              opens doors to high-paying career paths, ensuring a rewarding
              return on your educational investment.
              <br />
              7. Enriching Campus Life: Beyond traditional classrooms, vibrant
              campus communities host a myriad of student organizations,
              technical clubs, and engaging events that enhance skill sets and
              broaden horizons.
              <br />
              8.Post-Graduation Success: A diploma from a US institution sets
              the stage for a successful career journey, with qualifications
              recognized and valued by employers worldwide.
              <br />
              9. Financial Support: Explore a wealth of scholarship and
              assistantship opportunities that alleviate financial concerns
              associated with pursuing higher education.
              <br />
              10. Extended STEM Opportunities:STEM programs offer an Optional
              Practical Training (OPT) extension of 12+24 months, enabling
              graduates to work in the USA for up to 3 years after completing
              their studies.
              <br />
              Embrace the USA Experience: A Tapestry of Multicultural Learning
              Immersing yourself in the USA is not just about education; it's a
              chance to thrive in an environment characterized by diversity,
              individualism, and practicality.
              <br />
              Here's a glimpse of what awaits:
              <br />
              -Multifaceted Cultural Scene Join a global community with 35% of
              students hailing from around the world, fostering a rich
              multicultural milieu that broadens perspectives.
              <br />
              -Engaging Beyond the Classroom: Unearth a treasure trove of
              student organizations, clubs, and events, fostering interpersonal
              skills and holistic personal development.
              <br /> -Secure Campus Atmosphere: USA campuses prioritize safety
              and empower independent living, enabling students to embark on new
              experiences and personal growth. Embark on a transformative
              journey of learning, living, and achieving in the USA, where
              education transcends boundaries and possibilities are boundless.
            </p>
          </div>
        </div>
        <form className="form m-2 submitform">
          <div className="flex">
            <label>
              <input className="input" type="text" placeholder="" required="" />
              <span>first name</span>
            </label>

            <label>
              <input className="input" type="text" placeholder="" required="" />
              <span>last name</span>
            </label>
          </div>

          <label>
            <input className="input" type="email" placeholder="" required="" />
            <span>email</span>
          </label>

          <label>
            <input className="input" placeholder="" type="tel" required="" />
            <span>contact number</span>
          </label>
          <label>
            <input
              className="input"
              placeholder=""
              type="text"
              required=""
              value="USA"
            />
            <span>country</span>
          </label>
          <label>
            <textarea
              className="input01"
              placeholder=""
              rows="3"
              required=""
            ></textarea>
            <span>message</span>
          </label>

          <button href="#" className="fancy">
            <span className="top-key"></span>
            <span className="text">submit</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Studyusa;

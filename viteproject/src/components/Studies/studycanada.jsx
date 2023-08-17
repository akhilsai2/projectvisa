import React from "react";

const Studycanada = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        className="flex justify-content-center align-items-end"
        style={{
          position: "absolute",
          zIndex: "5",
          top: "10%",
          height: "30vh",
          width: "50%",
        }}
      >
        <h1 className="study_heading">
          <span className="pipe">|</span>Canada
        </h1>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/18/19/04/graduation-995042_1280.jpg"
        className="study_bg"
      />
      <div className="p-0">
        <div className="row">
          <div className="flex flex-column justify-content-between align-items-center align-self-start col-sm-12 col-md-4">
            <img
              src="https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990_1280.jpg"
              style={{
                width: "90%",
                boxShadow: "0px 4px 16px 0px #bfbfbf",
              }}
              className="rounded-5  mt-2 mb-5"
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
                  value="CAN"
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
            <h2 style={{ fontWeight: "700" }}>Why Canada ?</h2>
            <h4 style={{ fontStyle: "italic", textDecoration: "underline" }}>
              Canada - Embrace Diversity and Quality Education:
            </h4>
            <p
              style={{
                fontSize: "15px",
                textAlign: "left",
                letterSpacing: "1px",
                lineHeight: "1.5",
              }}
            >
              The United Kingdom has a long-standing tradition of academic
              excellence and is home to some of the world's oldest and most
              prestigious universities. Immerse yourself in the country's rich
              history and cultural heritage while pursuing top-notch education
              in diverse fields. Experience a global outlook and engage with a
              multicultural community of students from around the world.
              <br />
              Indeed, the United Kingdom has a long-standing reputation for
              hosting some of the top-ranked universities in the world. This
              reputation has attracted a large number of international students,
              including over 50,000 Indian students annually. The UK's tertiary
              education system has produced world leaders in various fields such
              as business, science, technology, and politics, contributing to
              its global influence. Studying in the UK offers several
              advantages, one of which is the opportunity to improve English
              language skills. English is the most widely spoken language
              globally, and having proficiency in it can enhance employability
              prospects worldwide.
              <br />
              <br />
              The UK education system also operates under different national
              qualification frameworks to standardize and link the levels and
              credit values of various qualifications: <br />
              1. The Regulated Qualifications Framework (RQF) governs general
              and vocational qualifications regulated by Ofqual in England and
              the Council for the Curriculum, Examinations, and Assessment
              (CCEA) in Northern Ireland. <br />
              2. The Credit and Qualifications Framework for Wales (CQFW)
              applies to all qualifications in Wales and is regulated by
              Qualifications Wales. <br />
              3. The Scottish Credit and Qualifications Framework (SCQF) covers
              all qualifications in Scotland. <br />
              4. The Frameworks for Higher Education Qualifications of UK
              Degree-Awarding Bodies (FHEQ) pertains to qualifications awarded
              by institutions across the UK with degree-awarding powers. <br />
              <br />
              Additionally, the UK's degree programs typically have shorter
              durations compared to many other countries, making them
              cost-effective and less time-consuming. Undergraduate programs
              usually last three years, while postgraduate (Master's) programs
              typically consist of one year of coursework followed by an
              internship or project. <br />
              These factors, combined with the academic excellence and cultural
              diversity offered by UK universities, make studying in the UK an
              attractive option for many international students seeking a
              high-quality education and valuable international experience.{" "}
              <br />
            </p>
          </div>
        </div>
        <form className="form m-2  submitform">
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
              value="CAN"
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

export default Studycanada;

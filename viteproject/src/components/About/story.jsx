import "./about.css";
import {
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import React from "react";
import axios from "axios";
import { Animation } from "react-easy-animations";
import { BsArrowRight } from "react-icons/bs";
import graduationDayImg from '../../assets/graduationDay.jpg'
export const Story = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        className="flex justify-content-start align-items-end ms-5"
        style={{
          position: "absolute",
          zIndex: "5",
          top: "10%",
          height: "20vh",
          width: "50%",
        }}
      >
        <h1 className="study_heading">
          <span className="pipe">|</span>About Us
        </h1>
      </div>
      <img
        src={graduationDayImg}
        className="study_bg"
      />

      <div className="about-sub-card px-5">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container">
            <div className="row no-gutters">
              <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start">
                {/* ////////////////////////////Card Start///////////////////////////////////// */}
                <div className="about-img-card">
                  <div className="about-img-card-inner">
                    <p className="about-img-card-title">Elon Musk</p>
                    <div className="about-img-card-image">
                      <img
                        src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG.png" //  GIVE IMAGE HERE
                        alt=""
                      />
                    </div>
                    <div className="about-img-card-items">
                      <div className="about-img-card-item">
                        <svg
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="about-img-card-bi bi-github"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </div>
                      <div className="about-img-card-item">
                        <svg
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          width="169.063px"
                          height="169.063px"
                          viewBox="0 0 169.063 169.063"
                          style={{
                            enableBackground: "new 0 0 169.063 169.063",
                          }}
                          xmlSpace="preserve"
                        >
                          <g>{/* ... Path data ... */}</g>
                        </svg>
                      </div>
                      <div className="about-img-card-item">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <div className="about-img-card-item">
                        <svg
                          width="15px"
                          height="15px"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.20938 0.0931333C7.38323 -0.0310444 7.61677 -0.0310444 7.79062 0.0931333L14.7906 5.09313C14.922 5.18699 15 5.33852 15 5.5V9.5C15 9.66148 14.922 9.81301 14.7906 9.90687L7.79062 14.9069C7.61677 15.031 7.38323 15.031 7.20938 14.9069L0.209381 9.90687C0.0779828 9.81301 0 9.66148 0 9.5V5.5C0 5.33852 0.0779828 5.18699 0.209381 5.09313L7.20938 0.0931333ZM1 6.47159L2.43977 7.5L1 8.52841V6.47159ZM1.36023 9.5L7 13.5284V10.7573L3.3 8.11445L1.36023 9.5ZM4.16023 7.5L7.5 9.88555L10.8398 7.5L7.5 5.11445L4.16023 7.5ZM8 4.24269L11.7 6.88555L13.6398 5.5L8 1.47159V4.24269ZM7 1.47159V4.24269L3.3 6.88555L1.36023 5.5L7 1.47159ZM14 6.47159L12.5602 7.5L14 8.52841V6.47159ZM13.6398 9.5L11.7 8.11445L8 10.7573V13.5284L13.6398 9.5Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ////////////////////////////Card End///////////////////////////////////// */}
              </div>
              <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
                <div className="content d-flex flex-column justify-content-center">
                  <h3>About EXPLORENEX</h3>
                  <p style={{ textAlign: "justify" }}>
                    At ExploreNexGen, we are dedicated to helping students
                    achieve their dreams of studying abroad. Our mission is to
                    provide comprehensive guidance and support to students
                    seeking to explore international education opportunities.
                    With years of experience in the field, we have established
                    ourselves as a trusted partner for students and parents
                    alike.
                  </p>
                  <div className="row">
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-emoji-smile"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="65"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>Our Approach: </p>
                        <p style={{ textAlign: "justify" }}>
                          We believe that studying abroad is not just about
                          getting a degree; it's an enriching journey that
                          transforms lives. Our team of experienced consultants
                          understands the unique challenges and opportunities
                          that come with studying in a foreign country. We offer
                          personalized guidance to help students make informed
                          decisions about their academic pursuits and career
                          goals.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-journal-richtext"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="85"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>Our Values</p>
                        <p style={{ textAlign: "justify" }}>
                          <ul className="list-group">
                            <li style={{ fontSize: "16px" }}>
                              <BsArrowRight style={{ fontSize: "15px" }} />{" "}
                              Integrity:{" "}
                              <span
                                style={{
                                  fontSize: "13px",
                                  fontWeight: "600",
                                  fontStyle: "Fantasy",
                                  fontVariant: "smallCaps",
                                }}
                              >
                                Honesty and transparency form the foundation of
                                our interactions with students, parents, and
                                partner institutions
                              </span>
                            </li>
                            <li style={{ fontSize: "16px" }}>
                              <BsArrowRight style={{ fontSize: "15px" }} />{" "}
                              Empathy:{" "}
                              <span
                                style={{
                                  fontSize: "13px",
                                  fontWeight: "600",
                                  fontStyle: "Fantasy",
                                  fontVariant: "smallCaps",
                                }}
                              >
                                We understand the hopes and dreams of aspiring
                                students and approach our services with genuine
                                empathy and compassion.
                              </span>
                            </li>
                            <li style={{ fontSize: "16px" }}>
                              <BsArrowRight style={{ fontSize: "15px" }} />{" "}
                              Excellence:{" "}
                              <span
                                style={{
                                  fontSize: "13px",
                                  fontWeight: "600",
                                  fontStyle: "Fantasy",
                                  fontVariant: "smallCaps",
                                }}
                              >
                                Our commitment to excellence drives us to
                                continually improve and deliver the best
                                possible services to our students
                              </span>
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>

                    {/* <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-clock"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="12"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Years of experience</strong> aut commodi
                          quaerat modi aliquam nam ducimus aut voluptate non vel
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-award"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="15"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Awards</strong> rerum asperiores dolor alias
                          quo reprehenderit eum et nemo pad der
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
                {/* <!-- End .content--> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <div className="paragraph col-lg-12 col-sm-12">
          <Animation
            type="fadeInFromBottom"
            duration="1000ms"
            //  delay="1s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
            className="w-100"
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                fontStyle: "Fantasy",
                fontVariant: "smallCaps",
              }}
            >
              Welcome to Dream2Degree, a leading consultancy dedicated to
              providing exceptional guidance and support for students aspiring
              to pursue higher education in esteemed institutions across the
              world. We understand that studying abroad is not merely a phase of
              academic life but a transformative journey that shapes your future
              and opens doors to boundless opportunities. At Dream2Degree, we
              are committed to being your trusted companion throughout this
              life-changing experience
            </p>
          </Animation>
        </div> */}
        {/* <div className="col-lg-4 col-sm-12 ">
          <Animation
            type="fadeInFromLeft"
            duration="1000ms"
            //  delay="1s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
            className="w-100"
          >
            <img
              src="https:media.istockphoto.com/id/1083619800/photo/crazy-angry-professor-yelling-and-pointing-with-a-stick.jpg?s=612x612&w=0&k=20&c=ykXbJvGrrRltXpJNl9iB55cf393d4NtCkDSg9tsuqU0="
              style={{ height: "100%", width: "100%" }}
            />
          </Animation>
        </div> */}

        {/* <div className="col-lg-8 col-sm-12" style={{ padding: "20px" }}>
          <Animation
            type="fadeInFromRight"
            duration="1000ms"
            //  delay="1s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
            className="w-100 "
          >
            <h2 id="main-heading">ABOUT US</h2>
            <p style={{ fontStyle: "Fantasy", fontVariant: "smallCaps" }}>
              About Dream2Degree: Empowering Your Dreams of Global Education
            </p>
            <p style={{ fontStyle: "Fantasy", fontVariant: "smallCaps" }}>
              Our mission is clear - to empower and inspire students from all
              walks of life to achieve their dream of studying abroad. We strive
              to remove barriers, bridge gaps, and provide a seamless pathway to
              quality education in countries like Australia, the UK, USA,
              Canada, Ireland, and New Zealand. At Dream2Degree, we believe that
              education is a force that transcends borders and transforms lives.
              Our goal is to make this force accessible to you, regardless of
              your background or circumstances.
            </p>
            <h2 id="main-heading">Our Mission</h2>
            <p style={{ fontStyle: "Fantasy", fontVariant: "smallCaps" }}>
              Our mission is clear - to empower and inspire students from all
              walks of life to achieve their dream of studying abroad. We strive
              to remove barriers, bridge gaps, and provide a seamless pathway to
              quality education in countries like Australia, the UK, USA,
              Canada, Ireland, and New Zealand. At Dream2Degree, we believe that
              education is a force that transcends borders and transforms lives.
              Our goal is to make this force accessible to you, regardless of
              your background or circumstances.
            </p>
            <div className="col-lg-12 col-sm-12" style={{ textAlign: "start" }}>
              <h3 style={{ textAlign: "center" }} id="main-heading">
                Our Values
              </h3>
              <ul className="list-group">
                <li style={{ fontSize: "16px" }}>
                  <BsArrowRight style={{ fontSize: "15px" }} /> Integrity:{" "}
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      fontStyle: "Fantasy",
                      fontVariant: "smallCaps",
                    }}
                  >
                    Honesty and transparency form the foundation of our
                    interactions with students, parents, and partner
                    institutions
                  </span>
                </li>
                <li style={{ fontSize: "16px" }}>
                  <BsArrowRight style={{ fontSize: "15px" }} /> Empathy:{" "}
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      fontStyle: "Fantasy",
                      fontVariant: "smallCaps",
                    }}
                  >
                    We understand the hopes and dreams of aspiring students and
                    approach our services with genuine empathy and compassion.
                  </span>
                </li>
                <li style={{ fontSize: "16px" }}>
                  <BsArrowRight style={{ fontSize: "15px" }} /> Excellence:{" "}
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      fontStyle: "Fantasy",
                      fontVariant: "smallCaps",
                    }}
                  >
                    Our commitment to excellence drives us to continually
                    improve and deliver the best possible services to our
                    students
                  </span>
                </li>
              </ul>
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <h3 id="main-heading">Join the Dream2Degree Family</h3>
                <p style={{ fontStyle: "Fantasy", fontVariant: "smallCaps" }}>
                  Embark on a life-changing journey with Dream2Degree, where
                  your dreams take center stage. Whether you are a high school
                  student planning for undergraduate studies or a working
                  professional seeking advanced degrees, we are here to guide
                  you towards a brighter future
                </p>
              </div>
            </div>
          </Animation> */}
        {/* <div>
            <form autoComplete="off" onSubmit={handleChange}>
              <label>name</label>
              <input
                type="text"
                value={name}
                placeholder="Enter Name"
                required
                onChange={(e) => setname(e.target.value)}
              />
              <label>number</label>
              <input
                type="text"
                value={number}
                placeholder="Enter Name"
                required
                onChange={(e) => setnumber(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                send
              </button>
            </form>
          </div> */}
        {/* ////////////////////////////Card Start///////////////////////////////////// */}
        {/* <div className="about-img-card">
            <div className="about-img-card-inner">
              <p className="about-img-card-title">Elon Musk</p>
              <div className="about-img-card-image">
                <img src="https://s4.uupload.ir/files/em_1sb.png" alt="" />
              </div>
              <div className="about-img-card-items">
                <div className="about-img-card-item">
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="about-img-card-bi bi-github"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </div>
                <div className="about-img-card-item">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="169.063px"
                    height="169.063px"
                    viewBox="0 0 169.063 169.063"
                    style={{ enableBackground: "new 0 0 169.063 169.063" }}
                    xmlSpace="preserve"
                  > */}
        {/* <g>... Path data ...</g> */}
        {/* </svg>
                </div>
                <div className="about-img-card-item">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div className="about-img-card-item">
                  <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.20938 0.0931333C7.38323 -0.0310444 7.61677 -0.0310444 7.79062 0.0931333L14.7906 5.09313C14.922 5.18699 15 5.33852 15 5.5V9.5C15 9.66148 14.922 9.81301 14.7906 9.90687L7.79062 14.9069C7.61677 15.031 7.38323 15.031 7.20938 14.9069L0.209381 9.90687C0.0779828 9.81301 0 9.66148 0 9.5V5.5C0 5.33852 0.0779828 5.18699 0.209381 5.09313L7.20938 0.0931333ZM1 6.47159L2.43977 7.5L1 8.52841V6.47159ZM1.36023 9.5L7 13.5284V10.7573L3.3 8.11445L1.36023 9.5ZM4.16023 7.5L7.5 9.88555L10.8398 7.5L7.5 5.11445L4.16023 7.5ZM8 4.24269L11.7 6.88555L13.6398 5.5L8 1.47159V4.24269ZM7 1.47159V4.24269L3.3 6.88555L1.36023 5.5L7 1.47159ZM14 6.47159L12.5602 7.5L14 8.52841V6.47159ZM13.6398 9.5L11.7 8.11445L8 10.7573V13.5284L13.6398 9.5Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div> */}

        {/* ////////////////////////////Card End///////////////////////////////////// */}
        {/* </div> */}
      </div>
    </div>
  );
};

export const CoreTeam = () => {
  return (
    <div>
      <div className="about-card"></div>

      <div className="about-sub-card">
        <div className="col-lg-4 col-sm-12 image">
          <img
            src="https://thumbs.dreamstime.com/b/confident-math-professor-teaching-front-chalkboard-confident-young-math-professor-standing-front-chalkboard-197220191.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="col-lg-8 col-sm-12 " style={{ padding: "20px" }}>
          <h4 style={{ color: "blue" }}>Founder</h4>
          <h1>NAVEEN YATHAPU</h1>
          <h5>Experience:</h5>
          <p>
            Naveen Yathapu (Founder of i20fever) along with his friends had
            researched for long hours to learn about US University application
            process and had documented all their study abroad university search
            experience. Little did they know that the “Scrapbook” they developed
            would help them build i20fever.
          </p>
          <p>
            Naveen Yathapu (Founder of i20fever) along with his friends had
            researched for long hours to learn about US University application
            process and had documented all their study abroad university search
            experience. Little did they know that the “Scrapbook” they developed
            would help them build i20fever.
          </p>
          <h5>Education</h5>
          <p>
            Naveen Yathapu (Founder of i20fever) along with his friends had
            researched for long hours to learn about US University application
            process and had documented all their study abroad university search
            experience. Little did they know that the “Scrapbook” they developed
            would help them build i20fever.
          </p>
        </div>
      </div>
      <div
        className="welcome-section-cont card-deck row card-container ms-0"
        style={{ width: "100%" }}
      >
        <div
          className="card col-lg-3 col-md-3 m-2 p-2"
          style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
        >
          <img
            className="card-img-top "
            src="https://leadershipcircle.com/wp-content/uploads/2020/08/Katie-Everett-.png"
            style={{ height: "90%", width: "100%" }}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">GRE</h5>
            <p className="card-text">
              IELTS test is both paper and computer based, Skills evaluated
              Listening, Reading, Writing & Speaking...
            </p>
            <div className="flex ">
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiOutlineWhatsApp style={{ color: "green" }} />
                </a>{" "}
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillLinkedin style={{ color: "black" }} />
                </a>
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillFacebook style={{ color: "black" }} />
                </a>{" "}
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillYoutube style={{ color: "red" }} />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="card col-lg-3 col-md-3 m-2 p-2"
          style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
        >
          <img
            className="card-img-top "
            src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg"
            style={{ height: "90%", width: "100%" }}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">IELTS</h5>
            <p className="card-text">
              IELTS test is both paper and computer based, Skills evaluated
              Listening, Reading, Writing & Speaking...
            </p>
            <div className="flex ">
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiOutlineWhatsApp style={{ color: "green" }} />
                </a>{" "}
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillLinkedin style={{ color: "black" }} />
                </a>
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillFacebook style={{ color: "black" }} />
                </a>{" "}
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillYoutube style={{ color: "red" }} />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="card col-lg-3 col-md-3 m-2 p-2"
          style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
        >
          <img
            className="card-img-top "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0YazIavyG5ZyOCZQd_zMp5ca3aFgE5UntA&usqp=CAU"
            style={{ height: "90%", width: "100%" }}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">TOEFL</h5>
            <p className="card-text">
              IELTS test is both paper and computer based, Skills evaluated
              Listening, Reading, Writing & Speaking...
            </p>
            <div className="flex ">
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiOutlineWhatsApp style={{ color: "green" }} />
                </a>{" "}
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillLinkedin style={{ color: "black" }} />
                </a>
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillFacebook style={{ color: "black" }} />
                </a>{" "}
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillYoutube style={{ color: "red" }} />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="card col-lg-3 col-md-3 m-2 p-2"
          style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
        >
          <img
            className="card-img-top "
            src="https://images.squarespace-cdn.com/content/v1/58e167a8414fb5c0b2b8c13e/1503561540900-K0FXVM3QNP4843AJGQCD/Circle+Profile.jpg"
            style={{ height: "90%", width: "100%" }}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">IELTS</h5>
            <p className="card-text">
              IELTS test is both paper and computer based, Skills evaluated
              Listening, Reading, Writing & Speaking...
            </p>
            <div className="flex ">
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiOutlineWhatsApp style={{ color: "green" }} />
                </a>{" "}
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillLinkedin style={{ color: "black" }} />
                </a>
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillFacebook style={{ color: "black" }} />
                </a>{" "}
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillYoutube style={{ color: "red" }} />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="card col-lg-3 col-md-3 m-2 p-2"
          style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
        >
          <img
            className="card-img-top "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuki5lrBmRRvk5KhjrMwByvTFz2c5Cb9vWTA&usqp=CAU"
            style={{ height: "90%", width: "100%" }}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">GMAT</h5>
            <p className="card-text">
              IELTS test is both paper and computer based, Skills evaluated
              Listening, Reading, Writing & Speaking...
            </p>
            <div className="flex ">
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiOutlineWhatsApp style={{ color: "green" }} />
                </a>{" "}
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillLinkedin style={{ color: "black" }} />
                </a>
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillFacebook style={{ color: "black" }} />
                </a>{" "}
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillYoutube style={{ color: "red" }} />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="card col-lg-3 col-md-3 m-2 p-2"
          style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
        >
          <img
            className="card-img-top "
            src="https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png"
            style={{ height: "90%", width: "100%" }}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">IELTS</h5>
            <p className="card-text">
              IELTS test is both paper and computer based, Skills evaluated
              Listening, Reading, Writing & Speaking...
            </p>
            <div className="flex ">
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiOutlineWhatsApp style={{ color: "green" }} />
                </a>{" "}
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillLinkedin style={{ color: "black" }} />
                </a>
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillFacebook style={{ color: "black" }} />
                </a>{" "}
              </div>
              <div className="coreteam-card-icon ">
                <a href="">
                  <AiFillYoutube style={{ color: "red" }} />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

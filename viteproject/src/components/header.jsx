import phone from "../assets/phoneCall.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sidebar } from "primereact/sidebar";
import { PanelMenu } from "primereact/panelmenu";
import mail from "../assets/mail.png";
import { useState } from "react";
import instaLogo from "../assets/instagram.png";
import whatsLogo from "../assets/whatsapp.png";
import facebookLogo from "../assets/facebook.png";
import linkedInLogo from "../assets/linkedin logo.png";
import logopng from "../assets/explorenex.png";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { Dock } from "primereact/dock";
import { selectExam, selectService, selectStudy } from "../globalstate";
import { useDispatch } from "react-redux";
import ReactWhatsapp from "react-whatsapp";
const Header = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const dispatch = useDispatch();
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const studyServicesData = [
    {
      label: "Study in UK",
      text: "United Kingdom",
      path: "/studies",
    },
    {
      label: "Study in USA",
      text: "United States of America",
      path: "/studies",
    },
    {
      label: "Study in Canada",
      text: "Canada",
      path: "/studies",
    },
    {
      label: "Study in Ireland",
      text: "Ireland",
      path: "/studies",
    },
    {
      label: "Study in Australia",
      text: "Australia",
      path: "/studies",
    },
    {
      label: "Study in NewZealand",
      text: "New Zealand",
      path: "/studies",
    },
  ];
  const itemsLogo = [
    {
      label: "Instagram",
      icon: () => (
        <img
          alt="Insta"
          src={instaLogo}
          width="33px"
          style={{ cursor: "pointer" }}
        />
      ),
      command: () =>
        window.open(
          "https://instagram.com/explorenexoverseas?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==",
          "_blank",
          "noreferrer"
        ),
    },
    {
      label: "Whatsapp",
      icon: () => (
        <ReactWhatsapp
          number="919182714452"
          message="I'm interested"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          {" "}
          <img alt="App Store" src={whatsLogo} width="30px" />
        </ReactWhatsapp>
      ),
    },
    {
      label: "Facebook",
      icon: () => (
        <img
          alt="Photos"
          src={facebookLogo}
          width="33px"
          style={{ cursor: "pointer" }}
        />
      ),
      command: () =>
        window.open(
          "https://www.facebook.com/profile.php?id=61550977888032&mibextid=ZbWKwL",
          "_blank",
          "noreferrer"
        ),
    },
    {
      label: "LinkedIn",
      icon: () => (
        <img
          alt="LinkedIn"
          src={linkedInLogo}
          width="53px"
          style={{ cursor: "pointer" }}
        />
      ),
      command: () =>
        window.open(
          "https://www.linkedin.com/in/explorenex-overseas",
          "_blank",
          "noreferrer"
        ),
    },
  ];
  const items = [
    {
      label: "Home",
      command: () => {
        setVisible(false);
        navigate("/");
      },
    },
    {
      label: "About",
      command: () => {
        setVisible(false);
        navigate("/about");
      },
    },
    {
      label: "Study Aboard",
      items: [
        {
          label: "Study in UK",
          command: () => {
            setVisible(false);
            dispatch(selectStudy("United Kingdom"));
            navigate("/studies");
          },
        },
        {
          label: "Study in USA",
          command: () => {
            setVisible(false);
            dispatch(selectStudy("United States of America"));
            navigate("/studies");
          },
        },
        {
          label: "Study in Canada",
          command: () => {
            setVisible(false);
            dispatch(selectStudy("Canada"));
            navigate("/studies");
          },
        },
        {
          label: "Study in Ireland",
          command: () => {
            setVisible(false);
            dispatch(selectStudy("Ireland"));
            navigate("/studies");
          },
        },
        {
          label: "Study in Australia",
          command: () => {
            setVisible(false);
            dispatch(selectStudy("Australia"));
            navigate("/studies");
          },
        },
        {
          label: "Study in NewZealand",
          command: () => {
            setVisible(false);
            dispatch(selectStudy("New Zealand"));
            navigate("/studies");
          },
        },
      ],
    },
    {
      label: "Services",
      items: [
        {
          label: "Tranings",
          items: [
            {
              label: "TOEFL",
              command: () => {
                setVisible(false);
                dispatch(selectExam("TOEFL"));
                navigate("/trainings");
              },
            },
            {
              label: "IELTS",
              command: () => {
                setVisible(false);
                dispatch(selectExam("IELTS"));
                navigate("/trainings");
              },
            },
            {
              label: "GRE",
              command: () => {
                setVisible(false);
                dispatch(selectExam("GRE"));
                navigate("/trainings");
              },
            },
            {
              label: "GMAT",
              command: () => {
                setVisible(false);
                dispatch(selectExam("GMAT"));
                navigate("/trainings");
              },
            },
          ],
        },
        {
          label: "Complete Application",
          command: () => {
            setVisible(false);
            dispatch(selectService("Complete Application"));
            navigate("/services");
          },
        },
        {
          label: "Preparation",
          command: () => {
            setVisible(false);
            dispatch(selectService("Preparation"));
            navigate("/services");
          },
        },
        {
          label: "Visa Application Help",
          command: () => {
            setVisible(false);
            dispatch(selectService("Visa Application Help"));
            navigate("/services");
          },
        },
        {
          label: "Mock Interviews Help",
          command: () => {
            setVisible(false);
            dispatch(selectService("Mock Visa Interviews"));
            navigate("/services");
          },
        },
        {
          label: "Education Loan Help",
          command: () => {
            setVisible(false);
            dispatch(selectService("Education Loan Help"));
            navigate("/services");
          },
        },
        {
          label: "Flight Ticketing Help",
          command: () => {
            setVisible(false);
            dispatch(selectService("Flights Tickets Help"));
            navigate("/services");
          },
        },
      ],
    },
    {
      label: "Contact Us",
      command: () => {
        setVisible(false);
        navigate("/contact");
      },
    },
  ];

  return (
    <>
      <div className="sub-header" style={{ width: "100%", position: "fixed" }}>
        <div className="bg-white logo-cont">
          <img
            src={logopng}
            alt="logo"
            className="rounded-circle"
            onClick={() => navigate("/")}
            style={{ width: "120px", mixBlendMode: "" }}
          />
        </div>
        <Dock
          model={itemsLogo}
          position="left"
          className="ms-3 border-0 bg-none dock-item"
          style={{ position: "fixed" }}
        />

        {/* <Dock
          model={itemsLogo}
          position="right"
          className="me-3 border-0 bg-none dock-mobile-item"
          style={{ position: "fixed" }}
        /> */}
        <div className="col-lg-12 col-sm-12">
          <div
            className="left-content"
            style={{ backgroundColor: !colorChange ? " #012e47" : "#000" }}
          >
            <div className="displayPhoneCont pt-3">
              <div className="phoneCont">
                <a href="tel:919182714452">
                  {" "}
                  <img src={phone} className="logo-icon" id="callId" />
                </a>{" "}
                <p className="call">
                  <a href="tel:919182714452" style={{ color: "white" }}>
                    {" "}
                    +919182714452
                  </a>{" "}
                  <a href="tel:919866807237">
                    <span className="secondNum" style={{ color: "white" }}>
                      ,+919182192691
                    </span>
                  </a>
                  <a href="tel:1(602)760-6618">
                    <span className="secondNum" style={{ color: "white" }}>
                      ,+1(602)760-6618
                    </span>
                  </a>
                </p>
              </div>
              <div className="phoneCont">
                <img src={mail} className="logo-icon" id="mailId" />{" "}
                <p className="call">
                  {" "}
                  <a
                    href="mailto:explorenexoverseas@gmail.com?subject=Me&body=Hello!"
                    style={{ color: "white" }}
                  >
                    explorenexoverseas@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header
        className="header-area header-sticky w-100"
        style={{
          position: "fixed",
          backgroundColor: colorChange ? " #012e47" : " rgba(28, 28, 28, 0.15)",
        }}
      >
        <nav className="main-nav ">
          <div></div>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="has-sub">
              <Link>Study Aboard</Link>
              <ul className="sub-menu">
                {studyServicesData.map((x, idx) => (
                  <li key={idx}>
                    <Link
                      to="/studies"
                      onClick={() => dispatch(selectStudy(x.text))}
                    >
                      {x.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="has-sub">
              <a>Services</a>
              <ul className="sub-menu">
                <li>
                  <Link
                    to="/trainings"
                    onClick={() => dispatch(selectExam("TOEFL"))}
                  >
                    Trainings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() =>
                      dispatch(selectService("Complete Application"))
                    }
                  >
                    Complete Application
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() => dispatch(selectService("Preparation"))}
                  >
                    Preparation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() =>
                      dispatch(selectService("Visa Application Help"))
                    }
                  >
                    Visa Application Help
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() =>
                      dispatch(selectService("Mock Visa Interviews"))
                    }
                  >
                    Mock Visa Interviews
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() =>
                      dispatch(selectService("Education Loan Help"))
                    }
                  >
                    Education Loan Help
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() =>
                      dispatch(selectService("Flights Tickets Help"))
                    }
                  >
                    Flight Tickets Help
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>

          <div className="menu-trigger">
            <GiHamburgerMenu
              className="mt-4 mx-3"
              style={{ color: "white", fontSize: "20px" }}
              onClick={() => setVisible(true)}
            />
          </div>
        </nav>
      </header>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="sideBar "
        style={{
          marginLeft: "0%",
          marginTop: "9vh",
          width: "60%",
        }}
      >
        <img
          src={logopng}
          alt="logo"
          style={{ width: "220px", marginTop: "0px" }}
        />
        <PanelMenu
          model={items}
          pt={{
            root: { className: "w-full md:w-25rem" },
          }}
        />
      </Sidebar>
    </>
  );
};

export default Header;

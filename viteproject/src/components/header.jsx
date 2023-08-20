import phone from "../assets/phoneCall.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sidebar } from "primereact/sidebar";
import { PanelMenu } from "primereact/panelmenu";
import mail from "../assets/mail.png";
import { useState } from "react";
import instaLogo from "../assets/instagram.png";
import whatsLogo from "../assets/whatsapp.png";
import facebookLogo from "../assets/facebook.png";
import twitterLogo from "../assets/twitter.png";
import { Menubar } from "primereact/menubar";

// import "../assets/style.css";
import "./header.css";
import { Link } from "react-router-dom";
import { Dock } from "primereact/dock";
import { selectExam, selectService } from "../globalstate";
import { useDispatch } from "react-redux";
const Header = () => {
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
      path: "/studies/uk",
    },
    {
      label: "Study in USA",
      path: "/studies/usa",
    },
    {
      label: "Study in Canada",
      path: "/studies/canada",
    },
    {
      label: "Study in Europe",
      path: "/studies/europe",
    },
    {
      label: "Study in Australia",
      path: "/studies/australia",
    },
    {
      label: "Study in NewZealand",
      path: "/studies/newzealand",
    },
  ];
  const itemsLogo = [
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
  const items = [
    {
      label: "Home",
    },
    {
      label: "About",
    },
    {
      label: "Study Aboard",
      items: [
        {
          label: "Study in UK",
        },
        {
          label: "Study in USA",
        },
        {
          label: "Study in Canada",
        },
        {
          label: "Study in Europe",
        },
        {
          label: "Study in Australia",
        },
        {
          label: "Study in NewZealand",
        },
      ],
    },
    {
      label: "Traning",
      items: [
        {
          label: "IELTS",
        },
        {
          label: "TOEFL",
        },
        {
          label: "GMAT",
        },
        {
          label: "GRE",
        },
      ],
    },
    {
      label: "Contact Us",
    },
  ];

  return (
    <>
      <div className="sub-header" style={{ width: "100%", position: "fixed" }}>
        <Dock
          model={itemsLogo}
          position="left"
          className="ms-3 border-0 bg-none"
          style={{ position: "fixed" }}
        />
        <div className="col-lg-12 col-sm-4">
          <div className="left-content">
            <div className="displayPhoneCont">
              <div className="phoneCont">
                <img src={phone} className="logo-icon" id="callId" />{" "}
                <p className="call">+918888888888,+919999999999</p>
              </div>
              <div className="phoneCont">
                <img src={mail} className="logo-icon" id="mailId" />{" "}
                <p className="call">dream2de@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header
        className="header-area header-sticky w-100"
        style={{
          position: "fixed",
          backgroundColor: colorChange
            ? "#201f1fd9"
            : " rgba(28, 28, 28, 0.15)",
        }}
      >
        <nav className="main-nav ">
          <h1 className="logo" style={{ color: "white", fontStyle: "oblique" }}>
            EXPLORENEX
          </h1>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/i20">About</Link>
            </li>
            <li className="has-sub">
              <Link>Study Aboard</Link>
              <ul className="sub-menu">
                {studyServicesData.map((x, idx) => (
                  <li key={idx}>
                    <Link to={x.path}>{x.label}</Link>
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
                    Tranings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() => dispatch(selectExam("Complete Application"))}
                  >
                    Complete Application
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() => dispatch(selectExam("Preparation"))}
                  >
                    Preparation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() =>
                      dispatch(selectExam("Visa Application Help"))
                    }
                  >
                    Visa Application Help
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() => dispatch(selectExam("Mock Visa Interviews"))}
                  >
                    Mock Visa Interviews
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>

          <div className="menu-trigger">
            <GiHamburgerMenu onClick={() => setVisible(true)} />
          </div>
        </nav>
      </header>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="sideBar"
        style={{
          marginLeft: "0%",
          height: "50%",
          marginBottom: "53%",
          width: "100%",
        }}
      >
        <div className="card ">
          <PanelMenu model={items} className="w-full md:w-25rem" />
        </div>
      </Sidebar>
    </>
  );
};

export default Header;

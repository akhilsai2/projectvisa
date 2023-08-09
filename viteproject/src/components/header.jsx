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

import "../assets/style.css";
import { Link } from "react-router-dom";
import { Dock } from "primereact/dock";
const Header = () => {
  const [visible, setVisible] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 630) {
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
      icon: "pi pi-fw pi-file",
    },
    {
      label: "About",
      icon: "pi pi-fw pi-pencil",
    },
    {
      label: "Study Aboard",
      icon: "pi pi-fw pi-user",
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
      icon: "pi pi-fw pi-calendar",
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
      icon: "pi pi-fw pi-file",
    },
  ];

  return (
    <>
      <div className="sub-header" style={{ width: "100%" }}>
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
      <header className="header-area header-sticky w-100">
        <nav className="main-nav ">
          <h1
            className="logo"
            style={{ color: colorChange ? "black" : "white" }}
          >
            Dream2DE
          </h1>
          <ul className="nav ">
            <li className="scroll-to-section">
              <a href="#top" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="meetings.html">About</a>
            </li>
            <li className="has-sub">
              <Link to="/">Study Aboard</Link>
              <ul className="sub-menu">
                {studyServicesData.map((x, idx) => (
                  <li key={idx}>
                    <Link to={x.path}>{x.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="has-sub">
              <a>Training</a>
              <ul className="sub-menu">
                <li>
                  <a href="meetings.html">IELTS</a>
                </li>
                <li>
                  <a href="meeting-details.html">TOFEL</a>
                </li>
                <li>
                  <a href="meeting-details.html">GMAT</a>
                </li>
                <li>
                  <a href="meeting-details.html">GRE</a>
                </li>
              </ul>
            </li>
            <li className="scroll-to-section">
              <a href="#courses">Courses</a>
            </li>
            <li className="scroll-to-section">
              <a href="#contact">Contact Us</a>
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

import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import LeafletMap from "../LeafletMap/LeafletMap";
import { useDispatch } from "react-redux";
import { selectStudy } from "../../globalstate";
const Footer = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="Footer footer-card">
        <div className="container">
          <div className="row total-footercard">
            <div className="col-md-6 col-lg-4 col-12 ft-1">
              <LeafletMap />
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2 sub-title ">
              <h5 className="main-heading"> STUDY ABROAD</h5>
              <ul>
                <li className="nav-item">
                  <a
                    className=""
                    href="/studies"
                    onClick={() => dispatch(selectStudy("United Kingdom"))}
                  >
                    Study in Uk
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=""
                    href="/studies"
                    onClick={() =>
                      dispatch(selectStudy("United States of America"))
                    }
                  >
                    Study in USA
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=""
                    href="/studies"
                    onClick={() => dispatch(selectStudy("Canada"))}
                  >
                    Study in Canada
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=""
                    href="/studies"
                    onClick={() => dispatch(selectStudy("Australia"))}
                  >
                    Study in Australia
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=""
                    href="/studies"
                    onClick={() => dispatch(selectStudy("New Zealand"))}
                  >
                    Study in New Zealand
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=""
                    href="/studies"
                    onClick={() => dispatch(selectStudy("Ireland"))}
                  >
                    Study in Ireland
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-2 col-12 ft-2 sub-title">
              <h5 className="main-heading"> TRAINING</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    IELTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    TOFEL
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    GMAT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    GRE
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3 col-12 ft-3 sub-title">
              <h5 className="main-heading">Quick Links</h5>
              <p>
                <span>
                  {" "}
                  <BiSolidPhoneCall
                    style={{ fontSize: "20px", margin: "5px" }}
                  />
                  <a href="tel:919182714452" style={{ color: "white" }}>
                    {" "}
                    IN +919182714452,+919182714452 <br /> US +1(602) 760-6618
                  </a>{" "}
                  <a href="tel:919866807237">
                    <span
                      className="secondNum"
                      style={{ color: "white" }}
                    ></span>
                  </a>
                </span>
              </p>
              <p>
                <a
                  href="mailto:explorenexoverseas@gmail.com?subject=Me&body=Hello!"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiMail style={{ fontSize: "20px", margin: "5px" }} />
                  explorenexoverseas@gmail.com
                </a>
              </p>
              <p>
                <AiFillLinkedin style={{ fontSize: "20px", margin: "5px" }} />
                dream2De@linkedin.com
              </p>
              <p>
                <VscLocation style={{ fontSize: "20px", margin: "5px" }} />{" "}
                1-28,A-sitaramapuram,Telaprolu,Unguturu,Krishna Dis,AP,521109
              </p>
              <div className="footer-icons">
                <a href="">
                  {" "}
                  <AiFillTwitterCircle
                    style={{
                      fontSize: "30px",
                      color: "white",
                      marginRight: "7px",
                    }}
                    className="icons"
                  />
                </a>
                <a href="https://www.youtube.com/@explorenexoverseas">
                  <AiFillYoutube
                    style={{
                      fontSize: "30px",
                      color: "white",
                      marginRight: "7px",
                    }}
                  />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61550977888032&mibextid=ZbWKwL">
                  <AiFillFacebook
                    style={{
                      fontSize: "30px",
                      color: "white",
                      marginRight: "7px",
                      borderRadius: "3px",
                    }}
                  />
                </a>
                <a href="https://instagram.com/explorenexoverseas?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                  <AiFillInstagram
                    style={{
                      fontSize: "30px",
                      color: "white",
                      marginRight: "7px",
                    }}
                  />
                </a>
              </div>
            </div>
            <hr className="horizental"></hr>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>2023 DREAM2DE All Rights Reserved</p>
      </div>
    </>
  );
};
export default Footer;

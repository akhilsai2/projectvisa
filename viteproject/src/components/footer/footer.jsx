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
import { selectExam, selectStudy } from "../../globalstate";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
                  <span
                    className="text-white"
                    onClick={() => {
                      navigate("/studies");
                      dispatch(selectStudy("United Kingdom"));
                    }}
                  >
                    Study in Uk
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="text-white"
                    onClick={() => {
                      navigate("/studies");
                      dispatch(selectStudy("United States of America"));
                    }}
                  >
                    Study in USA
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="text-white"
                    onClick={() => {
                      navigate("/studies");
                      dispatch(selectStudy("Canada"));
                    }}
                  >
                    Study in Canada
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="text-white"
                    onClick={() => {
                      navigate("/studies");
                      dispatch(selectStudy("Australia"));
                    }}
                  >
                    Study in Australia
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="text-white"
                    onClick={() => {
                      navigate("/studies");
                      dispatch(selectStudy("New Zealand"));
                    }}
                  >
                    Study in New Zealand
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="text-white"
                    onClick={() => {
                      navigate("/studies");
                      dispatch(selectStudy("Ireland"));
                    }}
                  >
                    Study in Ireland
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-2 col-12 ft-2 sub-title">
              <h5 className="main-heading"> TRAINING</h5>
              <ul>
                <li className="nav-item">
                  <span
                    className="text-white"
                    onClick={() => {
                      navigate("/trainings");
                      dispatch(selectExam("IELTS"));
                    }}
                  >
                    IELTS
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="text-white"
                    onClick={() => {
                      navigate("/trainings");
                      dispatch(selectExam("TOEFL"));
                    }}
                  >
                    TOEFL
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="text-white"
                    onClick={() => {
                      navigate("/trainings");
                      dispatch(selectExam("GMAT"));
                    }}
                  >
                    GMAT
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="text-white"
                    onClick={() => {
                      navigate("/trainings");
                      dispatch(selectExam("GRE"));
                    }}
                  >
                    GRE
                  </span>
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
                  <span href="tel:919182714452" style={{ color: "white" }}>
                    {" "}

                    IN +919182714452,+919182714452 <br /> US +1(602) 760-6618
           
                  <a href="tel:919866807237"> 

                    +919182714452


                  <span href="tel:919866807237">

                    <span
                      className="secondNum"
                      style={{ color: "white" }}
                    ></span>
                  </span>
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
                explorenexoverseas@linkedin.com
              </p>
              <p>
                <VscLocation style={{ fontSize: "20px", margin: "5px" }} />{" "}
                1-28,A-sitaramapuram,Telaprolu,Unguturu,Krishna Dis,AP,521109
              </p>
              <div className="footer-icons">
                <span href="">
                  {" "}
                  <AiFillTwitterCircle
                    style={{
                      fontSize: "30px",
                      color: "white",
                      marginRight: "7px",
                    }}
                    className="icons"
                  />
                </span>
                <span href="https://www.youtube.com/@explorenexoverseas">
                  <AiFillYoutube
                    style={{
                      fontSize: "30px",
                      color: "white",
                      marginRight: "7px",
                    }}
                  />
                </span>
                <span href="https://www.facebook.com/profile.php?id=61550977888032&mibextid=ZbWKwL">
                  <AiFillFacebook
                    style={{
                      fontSize: "30px",
                      color: "white",
                      marginRight: "7px",
                      borderRadius: "3px",
                    }}
                  />
                </span>
                <span href="https://instagram.com/explorenexoverseas?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                  <AiFillInstagram
                    style={{
                      fontSize: "30px",
                      color: "white",
                      marginRight: "7px",
                    }}
                  />
                </span>
              </div>
            </div>
            <hr className="horizental"></hr>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>2023 EXPLORENEX All Rights Reserved</p>
      </div>
    </>
  );
};
export default Footer;

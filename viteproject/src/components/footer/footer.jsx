import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "./footer.css"
import 'bootstrap/dist/css/bootstrap.css';
import { AiFillTwitterCircle, AiFillYoutube, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { VscLocation } from 'react-icons/vsc';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
const Footer = () => {
  return (
    <>
      <div className="Footer footer-card">
        <div className="container">
        <div className='middle-crad '>

          <div> <h6>IF YOU HAVE ANY QUREY OR NEED INFORMATION ABOUT STEM OVERSERAL PLEACE CONTACT</h6></div>
             
              <div className='sub-middle-card'>
                <h6>+91 8106658662, 123456789</h6>

              </div>
            </div>
          <div className="row">
           
            <div className="col-md-6 col-lg-4 col-12 ft-1">
              <img src="https://thumbs.dreamstime.com/b/kids-education-child-boy-study-school-thinking-bubble-dreaming-over-black-chalkboard-75214276.jpg" style={{ height: "100px", width: "100px" }} />
              <div className="footer-icons">
                <a href=''> <AiFillTwitterCircle style={{ fontSize: "20px", color: "white",marginRight:"7px" }} /></a>
                <a href='' ><AiFillYoutube style={{ fontSize: "20px", color: "white",marginRight:"7px" }}  /></a>
                <a href='' ><AiFillFacebook style={{ fontSize: "20px", color: "white",marginRight:"7px"  }} /></a>
                <a href='' ><AiFillInstagram style={{ fontSize: "20px", color: "white" ,marginRight:"7px" }} /></a>

              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5 className='main-heading'>  STUDY ABROAD</h5>
              <ul >
                <li className="nav-item">
                  <a className="" href="/">Study in Uk</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">Study in USA</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">Study in CAnada</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">Study in Australia</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">Study in New Zealand</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">Study in Europe</a>
                </li>
              </ul>
            </div>
           
            <div className="col-md-6 col-lg-2 col-12 ft-2">
              <h5 className='main-heading'>  TRAINING</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">IELTS</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">TOFEL</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">GMAT</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">GRE</a>
                </li>

              </ul>
            </div>
           
            <div className="col-md-6 col-lg-3 col-12 ft-3">
              <h5 className='main-heading'>Quick Links</h5>
              <p><VscLocation style={{ fontSize: "20px" }} /> vijayawada</p>
              <p><BiSolidPhoneCall style={{ fontSize: "20px" }} /> +918106658662</p>
              <p><FiMail style={{ fontSize: "20px" }} />vishnu123@gmail.com</p>
            </div>
            <hr className='horizental'></hr>
          </div>
        </div>
      </div>
      <div className='Last-footer'>
        <p>2023 Stem Overseas All Rights Reserved</p>
      </div>
    </>

  );
}
export default Footer;
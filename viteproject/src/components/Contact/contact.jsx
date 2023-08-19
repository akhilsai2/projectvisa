import React from "react";
import contact from "../../assets/workspace.jpg";
import call from "../../assets/call.png";
import location from "../../assets/placeholder.png";
import "./contact.css";

const Contact = () => {
  return (
    <div style={{ height: "130vh" }}>
      <div
        className="flex justify-content-center align-items-center"
        style={{
          position: "absolute",
          zIndex: "5",
          top: "10%",
          height: "30vh",
          width: "100%",
        }}
      >
        <h1 className="study_heading">
          <span className="pipe">|</span>Contact Us
        </h1>
      </div>
      <img src={contact} className="study_bg" />
      <div className="flex justify-content-center align-items-center w-100">
        <div className="formCont col-6 flex flex-row align-items-center justify-content-center">
          <div className="col-6">
            <img
              src="https://st2.depositphotos.com/3922907/12251/i/450/depositphotos_122519302-stock-photo-hand-pressing-telephone-and-mail.jpg"
              style={{ width: "350px", borderRadius: "10px" }}
            />
          </div>
          <div className="col-6 flex flex-column align-items-center justify-content-center ">
            <h4 className="fw-bold">Keep in touch with us</h4>
            <form className="inCont">
              <label htmlFor="Name" className="label">
                Name
              </label>
              <input
                id="Name"
                className="inputcontact"
                type="text"
                placeholder="Name"
              />
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                className="inputcontact"
                type="text"
                placeholder="Email"
              />
              <label htmlFor="msg" className="label">
                Message
              </label>
              <textarea
                id="msg"
                className="textarea"
                placeholder="Enter Message..."
                rows={6}
                cols={39}
              />
              <button type="submit" className="submitbtn">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="col-3">
          <div
            className="formCont flex flex-column align-items-center justify-content-center"
            style={{ height: "215px" }}
          >
            <img src={call} alt="Call" style={{ width: "80px" }} />
            <h6 className="fw-bold">Call At US</h6>
            <p>+918647364733 , +916737737373</p>
          </div>
          <div
            className="formCont flex flex-column align-items-center justify-content-center"
            style={{ height: "215px" }}
          >
            <img src={location} alt="Call" style={{ width: "80px" }} />
            <h6 className="fw-bold">Locate At US</h6>
            <p className="text-center">
              Address: xxxxxxxx,xxxxxxx,xxxxxxxx,xxxx,
              <br />
              zipcode 90999
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

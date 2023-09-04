import React from "react";
import contact from "../../assets/workspace.jpg";
import call from "../../assets/call.png";
import location from "../../assets/placeholder.png";
import "./contact.css";
import axios from "axios";

const Contact = () => {
  const [firstName, setfirstName] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [number, setnumber] = React.useState("");
  const [msg, setmsg] = React.useState("");
  const handleChange = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastname: lastname,
      email: email,
      number: number,
      msg: msg,
    };
    axios.post(
      "https://sheet.best/api/sheets/b0481a3b-d93d-472f-a4b6-43ea6a177f79",
      data
    );
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        className="flex justify-content-start align-items-end ms-5 mb-5"
        style={{
          position: "absolute",
          zIndex: "5",
          top: "10%",
          height: "20vh",
          width: "50%",
        }}
      >
        <h1 className="study_heading">
          <span className="pipe">|</span>Contact Us
        </h1>
      </div>
      <img src={contact} className="study_bg" />

        {/* /////////////////heading part end///////////////////////// */}







      <div className="flex flex-wrap justify-content-between p-5  align-items-center w-100">




        <div className="formCont col-12 col-md-7 d-flex flex-wrap align-items-center justify-content-center">
          <div className="col-12 col-md-5">
            <img
              src="https://st2.depositphotos.com/3922907/12251/i/450/depositphotos_122519302-stock-photo-hand-pressing-telephone-and-mail.jpg"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
          <div className="col-12 col-md-5 flex flex-column align-items-center justify-content-center ">
            <h4 className="fw-bold">Keep in touch with us</h4>
            <form className="inCont" onSubmit={handleChange}>
              <label htmlFor="Name" className="label">
                Name
              </label>
              <input
                id="Name"
                className="inputcontact"
                type="text"
                placeholder="Name"
                onChange={(e)=>setfirstName(e.target.value)}
              />
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                className="inputcontact"
                type="text"
                placeholder="Email"
                onChange={(e)=>setemail(e.target.value)}
              />
              <label htmlFor="msg" className="label">
                Message
              </label>
              <textarea
                id="msg"
                className="textarea"
                placeholder="Enter Message..."
                rows={6}
                cols={29}
              />
              <button type="submit" className="submitbtn">
                Send
              </button>
            </form>
          </div>
        </div>















        <div className="d-flex flex-column justify-content-between align-items-center col-12 col-md-3">
          <div
            className="formCont flex flex-column align-items-center justify-content-center"
            style={{minHeight:"215px" }}
          >
            <img src={call} alt="Call" style={{ width: "80px" }} />
            <h6 className="fw-bold">Call At US</h6>
            <p>+918647364733 , +916737737373</p>
          </div>
          <div
            className="formCont flex flex-column align-items-center justify-content-center"
            style={{ minHeight:"215px" }}
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

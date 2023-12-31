import React from "react";
import contact from "../../assets/workspace.jpg";
import call from "../../assets/call.png";
import location from "../../assets/placeholder.png";
import "./contact.css";
import axios from "axios";
import ReactWhatsapp from "react-whatsapp";
import contactUsImg from "./contact asssets/contactUsImg.jpg";

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
      Email: email,
      number: number,
      Message: msg,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/3e947f87-4162-451f-aaa7-747f31a6268d",
        data
      )
      .then((response) => {
        setfirstName(" ");
        setlastname(" ");
        setemail(" ");
        setnumber(" ");
        setmsg(" ");
      });
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

      <div className="flex flex-wrap justify-content-around p-5  align-items-center w-100">
        <div className="formCont col-12 col-md-7 d-flex flex-wrap align-items-center justify-content-center">
          <div className="col-12 col-md-5">
            <img
              src={contactUsImg}
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
                style={{ color: "black" }}
                id="Name"
                className="inputcontact"
                type="text"
                placeholder="Name"
                onChange={(e) => setfirstName(e.target.value)}
              />
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                style={{ color: "black" }}
                id="email"
                className="inputcontact"
                type="text"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
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
                style={{ color: "black" }}
                onChange={(e) => setmsg(e.target.value)}
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
            style={{ minHeight: "215px" }}
          >
            <ReactWhatsapp
              style={{ border: "none", backgroundColor: "transparent" }}
              number="9182714452"
              message="I'm Interested "
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
                alt="Call"
                style={{ width: "80px" }}
              />{" "}
            </ReactWhatsapp>

            <h6 className="fw-bold">send Message </h6>
            <p>
              {" "}
              <a href="tel:16027606618" style={{ color: "black" }}>
                +1(602)760-6618
              </a>{" "}
              <a href="tel:918499932011" style={{ color: "black" }}>
                +91 9182714452
              </a>{" "}
            </p>
          </div>
          <div
            className="formCont d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "215px" }}
          >
            <img src={location} alt="Call" style={{ width: "60px" }} />
            <h6 className="fw-bold text-decoration-underline">Locate At US</h6>
            <p className="text-center">
              <strong>Address:</strong>{" "}
              1-28,A-sitaramapuram,Telaprolu,Unguturu,Krishna Dist,AP
              <br />
              pincode 521109
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

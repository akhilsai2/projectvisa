import React from "react";
import contact from "../assets/workspace.jpg";

const Contact = () => {
  return (
    <div>
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
      <div>
        <div>
          <h4>Keep in touch with us</h4>
          <div>
            <form>
              <div>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Name" />
              </div>
              <textarea rows={10} cols={50} placeholder="Message" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

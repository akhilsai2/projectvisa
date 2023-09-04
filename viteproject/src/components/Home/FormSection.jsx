import React from "react";
import "./home.css";
import axios from "axios";

const FormSection = () => {
  const [name, setname] = React.useState("");
  const [Lastname, setlastname] = React.useState("");
  const [number, setnumber] = React.useState("");
  const [mail, setmail] = React.useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      Lastname: Lastname,
      mail: mail,
      number: number,
    };
    // console.log(data)
    axios
      .post(
        "https://sheet.best/api/sheets/3e947f87-4162-451f-aaa7-747f31a6268d",
        data
      )
      .then((response) => {
        console.log(response);
        
      });
  };

  return (
    <div className="d-flex flex-wrap welcome-section-cont">
      <div className=" col-sm-12 col-md-6 text-center">
        <h3>Lorem ipsum dolor</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="col-sm-12 col-md-6 d-flex justify-content-center">
        <form className="form" autoComplete="off" >
          <p className="title">Register </p>
          <p className="message">
            Get In Touch With Our Experienced Counsellors.{" "}
          </p>
          <div className="flex">
            <label>
              <input
                className="input"
                type="text"
                placeholder=""
                required
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <span>Firstname</span>
            </label>

            <label>
              <input
                className="input"
                type="text"
                placeholder=""
                required
                value={Lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
              <span>Lastname</span>
            </label>
          </div>

          <label>
            <input
              className="input"
              type="email"
              placeholder=""
              required
              value={mail}
              onChange={(e) => setmail(e.target.value)}
            />
            <span>Email</span>
          </label>

          <label>
            <input
              className="input"
              type="text"
              maxLength={20}
              placeholder=""
              required
              value={number}
              onChange={(e) => setnumber(e.target.value)}
            />
            <span>Phone Number</span>
          </label>
          <button className="submit">Submit</button>
          <p className="signin">
            Already have an acount ? <a href="#">Signin</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormSection;

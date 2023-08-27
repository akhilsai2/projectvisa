import React from "react";
import axios from "axios";

const FormDataMobile = (props) => {
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
    // console.log(data)
    axios.post(
      "https://sheet.best/api/sheets/b0481a3b-d93d-472f-a4b6-43ea6a177f79",
      data
    );
  };
  return (
    <form className="form w-100 mt-3" onSubmit={handleChange}>
      <div className="flex">
        <label>
          <input
            className="input"
            type="text"
            placeholder=""
            required
            onChange={(e) => setfirstName(e.target.value)}
          />
          <span>first name</span>
        </label>

        <label>
          <input
            className="input"
            type="text"
            placeholder=""
            required
            onChange={(e) => setlastname(e.target.value)}
          />
          <span>last name</span>
        </label>
      </div>

      <label>
        <input
          className="input"
          type="email"
          placeholder=""
          required
          onChange={(e) => setemail(e.target.value)}
        />
        <span>email</span>
      </label>

      <label>
        <input
          className="input"
          placeholder=""
          type="tel"
          required
          onChange={(e) => setnumber(e.target.value)}
        />
        <span>contact number</span>
      </label>
      <label>
        <input
          className="input"
          placeholder=""
          type="text"
          value={props.value}
          // required onChange={(e)=>setnumber(e.target.value)}
        />
        <span>{props.subject}</span>
      </label>
      <label>
        <textarea
          className="input01"
          placeholder=""
          rows="3"
          required
          onChange={(e) => setmsg(e.target.value)}
        ></textarea>
        <span>message</span>
      </label>

      <button href="#" className="fancy">
        <span className="top-key"></span>
        <span className="text">submit</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </form>
  );
};

export default FormDataMobile;

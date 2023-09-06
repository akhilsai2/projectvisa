import React from "react";
import axios from "axios";

const FormData = (props) => {
  const { mobile = true } = props;
  const [firstName, setFirstName] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [number, setnumber] = React.useState("");
  const [msg, setmsg] = React.useState("");
  const [gendervalue, setgendervalue] = React.useState("");

  const handleChange = (e) => {
    e.preventDefault();

    const data = {
      firstName: firstName,
      lastname: lastname,
      Email: email,
      Number: number,
      Message: msg,
      Gender: gendervalue,
    };

    // console.log(data)
    axios
      .post(
        "https://sheet.best/api/sheets/3e947f87-4162-451f-aaa7-747f31a6268d",
        data
      )
      .then((response) => {
        setFirstName(" ");
        setlastname(" ");
        setemail(" ");
        setnumber(" ");
        setmsg(" ");
      });
  };

  return (
    <form
      className={`form m-2 ${mobile && "form-mobile"}`}
      onSubmit={handleChange}
    >
      <div className="flex">
        <label>
          <input
            className="input"
            type="text"
            placeholder=""
            required
            onChange={(e) => setFirstName(e.target.value)}
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
      <select
        className="form-select input"
        defaultValue={"vishnu"}
        onChange={(e) => setgendervalue(e.target.value)}
        required
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

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
        <span>{mobile ? props.subject : "Desired Country"}</span>
      </label>
      <label>
        <textarea
          className="input01"
          placeholder=""
          rows="3"
          onChange={(e) => setmsg(e.target.value)}
        ></textarea>
        <span>message</span>
      </label>

      <button href="#" className="fancy" onClick={() => setemptyvalue(false)}>
        <span className="top-key"></span>
        <span className="text">submit</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </form>
  );
};

export default FormData;

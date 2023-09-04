import React from "react";
import axios from "axios";

const FormData = (props) => {
  const {mobile = true} = props
  const [firstName, setfirstName] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [number, setnumber] = React.useState("");
  const [msg, setmsg] = React.useState("");
  const[gendervalue,setgendervalue]=React.useState("")
  
  const handleChange = (e) => {
    e.preventDefault();
   
    const data = {
      firstName: firstName,
      lastname: lastname,
      Email: email,
      Number: number,
      msg: msg,
      Gender:gendervalue
    };
    // console.log(data)
    axios.post(
      "https://sheet.best/api/sheets/b0481a3b-d93d-472f-a4b6-43ea6a177f79",
      data
    );
    setfirstName("")
    setlastname("")
  };


  return (
    <form className={`form m-2 ${mobile && "form-mobile"}`} onSubmit={handleChange}>
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
      <select class="form-select input" defaultValue={"Select Gender"} onChange={(e)=>setgendervalue(e. value)}
            required>
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
        <span>{mobile ? props.subject:"Desired Country"}</span>
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

      <button href="#" className="fancy" onClick={()=>setemptyvalue(false
        )}>
        <span className="top-key"></span>
        <span className="text">submit</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </form>
  );
};

export default FormData;

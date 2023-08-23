import React from "react";

const FormData = (props) => {
  return (
    <form className="form m-2 ">
      <div className="flex">
        <label>
          <input className="input" type="text" placeholder="" required="" />
          <span>first name</span>
        </label>

        <label>
          <input className="input" type="text" placeholder="" required="" />
          <span>last name</span>
        </label>
      </div>

      <label>
        <input className="input" type="email" placeholder="" required="" />
        <span>email</span>
      </label>

      <label>
        <input className="input" placeholder="" type="tel" required="" />
        <span>contact number</span>
      </label>
      <label>
        <input
          className="input"
          placeholder=""
          type="text"
          required=""
          value={props.value}
        />
        <span>{props.subject}</span>
      </label>
      <label>
        <textarea
          className="input01"
          placeholder=""
          rows="3"
          required=""
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

export default FormData;

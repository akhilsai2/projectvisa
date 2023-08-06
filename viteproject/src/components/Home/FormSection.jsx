import React from "react";
import "./home.css";

const FormSection = () => {
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
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="col-sm-12 col-md-6 d-flex justify-content-center">
        <form class="form">
          <p class="title">Register </p>
          <p class="message">Signup now and get full access to our app. </p>
          <div class="flex">
            <label>
              <input class="input" type="text" placeholder="" required="" />
              <span>Firstname</span>
            </label>

            <label>
              <input class="input" type="text" placeholder="" required="" />
              <span>Lastname</span>
            </label>
          </div>

          <label>
            <input class="input" type="email" placeholder="" required="" />
            <span>Email</span>
          </label>

          <label>
            <input class="input" type="password" placeholder="" required="" />
            <span>Password</span>
          </label>
          <label>
            <input class="input" type="password" placeholder="" required="" />
            <span>Confirm password</span>
          </label>
          <button class="submit">Submit</button>
          <p class="signin">
            Already have an acount ? <a href="#">Signin</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormSection;

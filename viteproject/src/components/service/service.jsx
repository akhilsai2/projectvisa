import { useState } from "react";
import Accordian from "./accordian";
import { useDispatch, useSelector } from "react-redux";
import { selectExam } from "../../globalstate";
import Application from "./ServiceProvide/application";
import Preparation from "./ServiceProvide/preparation";
import Visainterview from "./ServiceProvide/visaapplication";
import Mockinterview from "./ServiceProvide/mockinterview";
import Educationloan from "./ServiceProvide/educationloan";
import Filght from "./ServiceProvide/filght";

const serviceData = [
  { id: 1, text: "Complete Application", component: <Application /> },
  { id: 2, text: "Preparation", component: <Preparation /> },
  { id: 3, text: "Visa Application Help", component: <Visainterview /> },
  { id: 4, text: "Mock Visa Interviews", component: <Mockinterview /> },
  { id: 5, text: "Education Loan Help", component: <Educationloan /> },
  { id: 6, text: "Flights Tickets Help", component: <Filght /> },
];
const Service = () => {
  const dispatch = useDispatch();
  const { Exam } = useSelector((state) => state.globalstate);
  const desiredComponent = serviceData.filter((x) => Exam === x.text)[0]
    .component;
  const onSelect = (i) => {
    dispatch(selectExam(i));
  };
  return (
    <div style={{ height: "160vh" }}>
      <div
        className="flex justify-content-start align-items-end ms-5"
        style={{
          position: "absolute",
          zIndex: "5",
          top: "10%",
          height: "20vh",
          width: "50%",
        }}
      >
        <h1 className="study_heading">
          <span className="pipe">|</span>Services
        </h1>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/18/19/04/graduation-995042_1280.jpg"
        className="study_bg"
      />
      <div className="flex justfy-content-around" style={{ height: "110vh" }}>
        <div className="col-4">
          <div className=" flex align-items-center justify-content-start">
            <p>
              Services <i className="fa fa-angle-right"></i>
            </p>

            <p>{Exam}</p>
          </div>
          <div className="flex flex-column align-items-center justify-content-between">
            <Accordian
              key={Exam}
              items={serviceData}
              active={Exam}
              onSelect={onSelect}
            />
            <form className="form m-2 ">
              <div className="flex">
                <label>
                  <input
                    className="input"
                    type="text"
                    placeholder=""
                    required=""
                  />
                  <span>first name</span>
                </label>

                <label>
                  <input
                    className="input"
                    type="text"
                    placeholder=""
                    required=""
                  />
                  <span>last name</span>
                </label>
              </div>

              <label>
                <input
                  className="input"
                  type="email"
                  placeholder=""
                  required=""
                />
                <span>email</span>
              </label>

              <label>
                <input
                  className="input"
                  placeholder=""
                  type="tel"
                  required=""
                />
                <span>contact number</span>
              </label>
              <label>
                <input
                  className="input"
                  placeholder=""
                  type="text"
                  required=""
                  value={Exam}
                />
                <span>Service Help</span>
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
          </div>
        </div>
        <div
          className="col-7 bg-white m-4 rounded h-100"
          style={{ boxShadow: "0px 4px 4px 0px #bfbfbf" }}
        >
          {desiredComponent}
        </div>
      </div>
    </div>
  );
};
export default Service;

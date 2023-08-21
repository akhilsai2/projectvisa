import React from "react";
import Accordian from "../service/accordian";
import { useDispatch, useSelector } from "react-redux";
import { selectExam, selectStudy } from "../../globalstate";
import Studyuk from "./studyuk";
import Studyusa from "./studyusa";
import Studycanada from "./studycanada";
import Studyeurope from "./studyeurope";
import Studyaustralia from "./studyaustralia";
import Studynewzealand from "./studynewzealand";
const StudyData = [
  { id: 1, text: "United Kingdom", component: <Studyuk /> },
  { id: 2, text: "United States of America", component: <Studyusa /> },
  { id: 3, text: "Canada", component: <Studycanada /> },
  { id: 4, text: "Ireland", component: <Studyeurope /> },
  { id: 5, text: "Australia", component: <Studyaustralia /> },
  { id: 6, text: "New Zealand", component: <Studynewzealand /> },
];
const Study = () => {
  const dispatch = useDispatch();
  const { Study } = useSelector((state) => state.globalstate);

  const desiredComponent = StudyData.filter((x) => Study === x.text)[0]
    .component;
  const onSelect = (i) => {
    dispatch(selectStudy(i));
  };
  return (
    <>
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
          <span className="pipe">|</span>
          {Study}
        </h1>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/18/19/04/graduation-995042_1280.jpg"
        className="study_bg"
      />
      <div className="flex justfy-content-around">
        <div className="col-4">
          <div className=" flex align-items-center justify-content-start">
            <p>
              Study <i className="fa fa-angle-right"></i>
            </p>

            <p>{Study}</p>
          </div>
          <div className="flex flex-column align-items-center justify-content-between">
            <Accordian
              key={Study}
              items={StudyData}
              active={Study}
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
                  value={Study}
                />
                <span>Country</span>
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
          className="col-7 bg-white m-4 rounded"
          style={{ boxShadow: "0px 4px 4px 0px #bfbfbf" }}
        >
          {desiredComponent}
        </div>
      </div>
    </>
  );
};

export default Study;

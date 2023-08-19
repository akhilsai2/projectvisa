import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectExam } from "../../../globalstate";
import Accordian from "../accordian";
import Tofel from "./Tofel";
import Ielts from "./ielts";
import Gre from "./gre";
import Gmat from "./gmat";
import "../../Studies/studies.css";
const trainData = [
  { id: 1, text: "TOEFL", component: <Tofel /> },
  { id: 2, text: "IELTS", component: <Ielts /> },
  { id: 3, text: "GRE", component: <Gre /> },
  { id: 4, text: "GMAT", component: <Gmat /> },
];
const Trainings = () => {
  const dispatch = useDispatch();
  const { Exam } = useSelector((state) => state.globalstate);
  const desiredComponent = trainData.filter((x) => x.text === Exam)[0]
    .component;
  const onSelect = (i) => {
    dispatch(selectExam(i));
  };
  return (
    <div style={{ height: "150vh" }}>
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
          <span className="pipe">|</span>Trainings
        </h1>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/18/19/04/graduation-995042_1280.jpg"
        className="study_bg"
      />
      <div className="flex justfy-content-center" style={{ height: "100vh" }}>
        <div className="col-4">
          <div className=" flex align-items-center justify-content-start">
            <p>
              Tranings <i className="fa fa-angle-right"></i>
            </p>

            <p>{Exam}</p>
          </div>
          <div className="flex flex-column align-items-center justify-content-between">
            <Accordian
              key={Exam}
              items={trainData}
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
                <span>Exam</span>
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
          className="col-7 bg-white m-3 rounded"
          style={{ boxShadow: "0px 4px 4px 0px #bfbfbf" }}
        >
          {" "}
          {desiredComponent}
        </div>
      </div>
    </div>
  );
};

export default Trainings;

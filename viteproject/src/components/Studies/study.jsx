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
import FormData from "../form";
import Dialogbox from "../dialogbox";
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
  const value = StudyData.filter((x) => Study === x.text)[0].text;
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
          width: "70%",
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
      <div className="row m-3">
        <div className="col-sm-12 col-md-4">
          <div className="flex flex-column align-items-center">
            <div className="flex align-items-center">
              <p>
                Study <i className="fa fa-angle-right"></i>
              </p>
              <p>{Study}</p>
            </div>
            <Accordian
              key={Study}
              items={StudyData}
              active={Study}
              onSelect={onSelect}
            />
            <FormData subject={"Country"} value={value} />
            <Dialogbox subject={"Country"} value={value} />
          </div>
        </div>
        <div
          className="col-sm-12 col-md-8 bg-white rounded text-left"
          style={{ boxShadow: "0px 4px 4px 0px #bfbfbf" }}
        >
          {desiredComponent}
        </div>
      </div>
    </>
  );
};

export default Study;

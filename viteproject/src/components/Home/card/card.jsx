import { useDispatch } from "react-redux";
import { selectExam } from "../../../globalstate";
import "bootstrap/dist/css/bootstrap.css";
import "../home.css";
import { useNavigate } from "react-router-dom";
import IELTSCardImg from "./CardsAssets/IELTSCard.jpg";
import TOEFLCardImg from "./CardsAssets/TOEFLCard.jpg";
import GMATCardImg from "./CardsAssets/GMATCard.jpg";

const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addtoExam = (Exam) => {
    dispatch(selectExam(Exam));
    navigate("/trainings");
  };
  return (
    <div
      className="welcome-section-cont card-deck row card-container ms-0"
      style={{ width: "100%", paddingTop: "190px", paddingBottom: "100px" }}
    >
      <h2 style={{ color: "orange" }}> What We Offer</h2>
      <h3>Traing We Provide</h3>
      <div
        className="card col-lg-3 col-md-3 m-2 p-2"
        style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
      >
        <img
          className="card-img-top "
          src={IELTSCardImg}
          style={{ height: "90%", width: "100%" }}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">IELTS</h5>
          <p className="card-text">
            IELTS test is both paper and computer based, Skills evaluated
            Listening, Reading, Writing & Speaking...
          </p>
          <button
            onClick={() => addtoExam("IELTS")}
            className="btn btn-primary customBtn"
          >
            Read more..
          </button>
        </div>
      </div>
      <div
        className="card col-lg-3 col-md-3 m-2 p-2"
        style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
      >
        <div className="card-body card-body1">
          <h5 className="card-title">TOEFL</h5>
          <p className="card-text">
            TOEFL test is computer based, Skills evaluated Speaking, Listening,
            Reading & Writing, Total score is 120...
          </p>
          <button
            onClick={() => addtoExam("TOEFL")}
            className="btn btn-primary"
          >
            Read more..
          </button>
        </div>
        <img
          className=" col-lg-3 "
          src={TOEFLCardImg}
          style={{
            height: "50%",
            width: "100%",
            borderRadius: "0px 0px 15px 15px",
          }}
          alt="Card image cap"
        />
      </div>
      <div
        className="card col-lg-3 col-md-3 m-2 p-2"
        style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
      >
        <img
          className="card-img-top"
          src={GMATCardImg}
          style={{ height: "100%", width: "100%" }}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">GMAT</h5>
          <p className="card-text">
            GMAT Test for students seeking admission into Masters programs in
            Management / Business...
          </p>
          <button className="btn btn-primary" onClick={() => addtoExam("GMAT")}>
            Read more..
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;

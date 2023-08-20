import { Link } from "react-router-dom";

const Tofel = () => {
  return (
    <div className="p-4">
      <h3 className="text-primary fw-bold">
        Test of English as Foreign Language
      </h3>
      <ul className="lh-lg">
        <li>
          <i className="fa fa-angle-right me-4 text-danger"></i>TOEFL test is
          computer based
        </li>
        <li>
          {" "}
          <i className="fa fa-angle-right me-4 text-danger"></i>Skills evaluated
          - Listening, Reading, Writing & Speaking
        </li>
        <li>
          {" "}
          <i className="fa fa-angle-right me-4 text-danger"></i>Total score is
          120 (Each Module 30)
        </li>
        <li>
          {" "}
          <i className="fa fa-angle-right me-4 text-danger"></i>TOEFL score is
          valid for 2 years
        </li>
      </ul>
      <h3 className="fw-bold text-black ">
        For More Detail Visit :
        <span className="ms-1 bg-primary p-2 rounded-3">
          <a
            href="https://www.ets.org/toefl.html"
            target="_blank"
            className="text-white"
          >
            www.ets.org/toefl
          </a>
        </span>
      </h3>
    </div>
  );
};

export default Tofel;

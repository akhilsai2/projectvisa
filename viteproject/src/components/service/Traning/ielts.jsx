const Ielts = () => {
  return (
    <div className="p-1 pt-3 flex flex-column align-items-start">
      <h3 className="text-primary fw-bold">
        International English Language Testing System
      </h3>
      <ul className="lh-lg">
        <li>
          <i className="fa fa-angle-right me-4 text-danger"></i>IELTS test is
          both paper and computer based
        </li>
        <li>
          {" "}
          <i className="fa fa-angle-right me-4 text-danger"></i>Skills evaluated
          - Listening, Reading, Writing & Speaking
        </li>
        <li>
          {" "}
          <i className="fa fa-angle-right me-4 text-danger"></i>Total score is
          9.0 bands
        </li>
        <li>
          {" "}
          <i className="fa fa-angle-right me-4 text-danger"></i>IELTS score is
          valid for 2 years
        </li>
      </ul>
      <h3 className="fw-bold text-black link-exam">
        For More Detail Visit :
        <span className="ms-1 bg-primary p-2 rounded-3 ">
          {" "}
          <a
            href="https://www.ielts.org/"
            target="_blank"
            rel="noreferrer"
            className="text-white "
          >
            www.ielts.org
          </a>
        </span>
      </h3>
    </div>
  );
};

export default Ielts;

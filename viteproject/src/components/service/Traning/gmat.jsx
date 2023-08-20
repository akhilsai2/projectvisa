const Gmat = () => {
  return (
    <div className="p-4">
      <h3 className="text-primary fw-bold">
        Graduate Management Admission Test
      </h3>
      <ul className="lh-lg">
        <li>
          <i className="fa fa-angle-right me-4 text-danger"></i>Graduate
          Management Admission Test
        </li>
        <li>
          {" "}
          <i className="fa fa-angle-right me-4 text-danger"></i>Skills evaluated
          - Analytical Writing Assessment,
        </li>
        <li>
          {" "}
          <i className="fa fa-angle-right me-4 text-danger"></i>Quantitative
          Section & Verbal Section
        </li>
        <li>
          {" "}
          <i className="fa fa-angle-right me-4 text-danger"></i>Total score is
          800
        </li>
        <li>
          {" "}
          <i className="fa fa-angle-right me-4 text-danger"></i>GRE score is
          valid for 5 years
        </li>
      </ul>
      <h3 className="fw-bold text-black ">
        For More Detail Visit :
        <span className="ms-1 bg-primary p-2 rounded-3">
          <a href="https://www.mba.com/" target="_blank" className="text-white">
            www.mba.com
          </a>
        </span>
      </h3>
    </div>
  );
};

export default Gmat;

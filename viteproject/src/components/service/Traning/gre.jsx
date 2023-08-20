const Gre = () => {
  return (
    <div className="p-4">
      <h3 className="text-primary fw-bold">Graduate Record Examination</h3>
      <ul className="lh-lg">
        <li>
          <i className="fa fa-angle-right me-4 text-danger"></i>GRE - Test for
          students seeking admission into Masters programs in Engineering and
          Science
        </li>
        <li>
          {" "}
          <i className="fa fa-angle-right me-4 text-danger"></i>Skills evaluated
          - Verbal, Quantitative & Analytical
        </li>
        <li>
          {" "}
          <i className="fa fa-angle-right me-4 text-danger"></i>Total score is
          340
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
          <a
            href="https://www.ets.org/gre.html"
            target="_blank"
            className="text-white"
          >
            www.ets.org/gre
          </a>
        </span>
      </h3>
    </div>
  );
};

export default Gre;

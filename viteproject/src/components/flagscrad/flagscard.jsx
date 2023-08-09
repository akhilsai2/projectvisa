import { Animation } from "react-easy-animations";
import australia from "../../assets/australia.png";
import canada from "../../assets/canada.png";
import newZealand from "../../assets/new-zealand.png";
import uk from "../../assets/union-jack.jpg";
import usa from "../../assets/usa.jpg";
import "./flagcard.css";
import "bootstrap/dist/css/bootstrap.css";

const Flagscard = () => {
  const contentFlags = [
    {
      image: uk,

      text: "UK",
    },
    {
      image: usa,

      text: "USA",
    },
    {
      image: canada,
      text: "CANADA",
    },
    {
      image: newZealand,
      text: "New Zealand",
    },
    {
      image: australia,
      text: "Australia",
    },
  ];
  return (
    <div className="flag-maincard">
      <div className="world-map">
        <div className="left-img ml-4">
          <img
            style={{ borderRadius: "20px", height: "30vh" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRCE7z1m2oVvE2gx3gubRr-MHjMoEC7kHpg&usqp=CAU"
            alt=""
          />
        </div>
        <div className="right-img mr-4">
          <img
            style={{ borderRadius: "20px", height: "30vh" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRCE7z1m2oVvE2gx3gubRr-MHjMoEC7kHpg&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="main-heading-flag pt-3">
        <h2 style={{ fontWeight: "400", fontSize: "25px" }}>
          Countries We Provide
        </h2>
        <h1 className="text-weight-bolder">
          Overseas Education Consultancy in Vijayawada
        </h1>
      </div>
      <div className="icons-card">
        <div className="row total-footercard flex justify-content-around">
          {contentFlags.map((x, idx) => (
            <Animation
              key={idx}
              type="fadeInFromBottom"
              duration="1000ms"
              delay="3s"
              direction="normal"
              timing="ease-in-out"
              iteration="1"
              fillMode="none"
              className={`flag-card card-align${
                idx + 1
              } col-lg-2 col-md-6 col-sm-11 `}
            >
              <div
              // className={`flag-card card-align${
              //   idx + 1
              // } col-lg-2 col-md-6 col-sm-11`}
              >
                <div className="flag-icon-card m-3 flex flex-column justify-content-around align-items-center">
                  <img
                    className="country-img rounded-circle"
                    src={x.image}
                    alt={x.text}
                  />
                  <h6 style={{ color: "#014585", fontWeight: "600" }}>
                    {x.text}
                  </h6>
                  <button className="btn btn-primary text-light flagBtn">
                    Read More
                  </button>
                </div>
              </div>
            </Animation>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Flagscard;

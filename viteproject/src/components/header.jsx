import phone from "../assets/phoneCall.png";
import mail from "../assets/mail.png";

const Header = () => {
  return (
    <>
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8">
              <div className="left-content">
                <div className="displayPhoneCont">
                  <div className="phoneCont">
                    <img src={phone} className="logo-icon" />{" "}
                    <p className="call">+918888888888,+919999999999</p>
                  </div>
                  <div className="phoneCont">
                    <img src={mail} className="logo-icon" />{" "}
                    <p className="call">dream2de@gmail.com</p>
                  </div>
                </div>
                {/* <p>
                  This is an educational <em>HTML CSS</em> template by
                  TemplateMo website.
                </p> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="right-icons">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  Dream2DE
                </a>

                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="meetings.html">About</a>
                  </li>
                  <li className="has-sub">
                    <a href="#apply">Study Aboard</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="meetings.html">Study in UK</a>
                      </li>
                      <li>
                        <a href="meeting-details.html">Study in USA</a>
                      </li>
                      <li>
                        <a href="meeting-details.html">Study in Europe</a>
                      </li>
                      <li>
                        <a href="meeting-details.html">Study in Canada</a>
                      </li>
                      <li>
                        <a href="meeting-details.html">Study in Australia</a>
                      </li>
                      <li>
                        <a href="meeting-details.html">Study in New Zealand</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub">
                    <a>Training</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="meetings.html">IELTS</a>
                      </li>
                      <li>
                        <a href="meeting-details.html">TOFEL</a>
                      </li>
                      <li>
                        <a href="meeting-details.html">GMAT</a>
                      </li>
                      <li>
                        <a href="meeting-details.html">GRE</a>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#courses">Courses</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

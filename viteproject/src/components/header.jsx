import phone from "../assets/phoneCall.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { PanelMenu } from "primereact/panelmenu";
import mail from "../assets/mail.png";

const Header = () => {
  const items = [
    {
      label: "File",
      icon: "pi pi-fw pi-file",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          items: [
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
            },
            {
              label: "Video",
              icon: "pi pi-fw pi-video",
            },
          ],
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
        {
          label: "Export",
          icon: "pi pi-fw pi-external-link",
        },
      ],
    },
    {
      label: "Edit",
      icon: "pi pi-fw pi-pencil",
      items: [
        {
          label: "Left",
          icon: "pi pi-fw pi-align-left",
        },
        {
          label: "Right",
          icon: "pi pi-fw pi-align-right",
        },
        {
          label: "Center",
          icon: "pi pi-fw pi-align-center",
        },
        {
          label: "Justify",
          icon: "pi pi-fw pi-align-justify",
        },
      ],
    },
    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-user-minus",
        },
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                },
              ],
            },
            {
              icon: "pi pi-fw pi-bars",
              label: "List",
            },
          ],
        },
      ],
    },
    {
      label: "Events",
      icon: "pi pi-fw pi-calendar",
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
        {
          label: "Archive",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className="sub-header">
        <div className="col-lg-12 col-sm-4">
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
      </div>
      <header className="header-area header-sticky">
        <nav className="main-nav ">
          <h1 className="logo">Dream2DE</h1>
          <ul className="nav ">
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
          <div className="menu-trigger">
            <GiHamburgerMenu />
          </div>
          {/* <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-25rem" />
          </div> */}
        </nav>
      </header>
    </>
  );
};

export default Header;

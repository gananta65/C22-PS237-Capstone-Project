import "./index.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav
      id="navbar_top"
      className="navbar sticky-top navbar-expand-lg navbar-light"
    >
      <div className="container">
        <Link className="navbar-brand" href="#">
          <img src="img/appmat logo text.png"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link
              to="about"
              spy={true}
              smooth={true}
              className="nav-link text-dark mr-3"
              href="#about"
            >
              About
            </Link>
            <Link
              to="feature"
              spy={true}
              smooth={true}
              className="nav-link mr-3 text-dark"
              href="#feature"
            >
              Features
            </Link>
            <Link
              to="support"
              spy={true}
              smooth={true}
              className="nav-link mr-3 text-dark"
              href="#support"
            >
              Support
            </Link>
            <Link
              to="team"
              spy={true}
              smooth={true}
              className="nav-link text-dark"
              href="#team"
            >
              Team
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import react from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header-container">
      <div className="header-image-container">
        <img src="../assets/images/dayheader.png" alt="girl on computer" />
      </div>
      <nav className="nav-bar">
        <Link to="/" className="nav-btn">
          Home
        </Link>
        <Link to="/about" className="nav-btn">
          About Me
        </Link>
        <Link to="/portfolio" className="nav-btn">
          Portfolio
        </Link>
        <Link to="/contact" className="nav-btn">
          Contact
        </Link>
      </nav>
    </section>
  );
}

export default Header;

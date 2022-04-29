import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header-container">
      <div className="header-image-container"></div>
      <nav className="nav-bar">
        <Link to="/home" className="nav-btn">
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

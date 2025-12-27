import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/global.css";
import acmLogo from "../assets/images/acm-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="nav-blur">
      <div className="container nav-inner">
        {/* LEFT */}
        <div className="nav-left">
          <div className="logo-circle">
            <img src={acmLogo} className="logo-img" alt="ACM Logo" />
          </div>

          <div className="logo-text">
            <span>TCET ACM</span>
            <span>SIGITE Student Chapter</span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/projects">Achievements</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* CTA + HAMBURGER */}
        <div className="nav-cta">
          <NavLink to="/contact">
            <button className="btn btn-ghost">
              <i className="ri-mail-line"></i> Reach TCET ACM
            </button>
          </NavLink>

          <button
            className="nav-menu-btn"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className={`nav-mobile ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/events" onClick={closeMenu}>Events</NavLink>
        <NavLink to="/projects" onClick={closeMenu}>Achievements</NavLink>
        <NavLink to="/team" onClick={closeMenu}>Team</NavLink>
        <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          <button
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "6px" }}
          >
            Reach TCET ACM
          </button>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;

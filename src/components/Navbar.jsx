import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // <-- replace with your logo file path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <button className="btn-outline">Sign In</button>
        <button className="btn-primary">Sign Up</button>
      </div>

      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;

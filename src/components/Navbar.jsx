import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/login"><button className="btn-outline">Sign In</button></Link>
        <Link to="/Signup"><button className="btn-primary">Sign Up</button></Link>
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

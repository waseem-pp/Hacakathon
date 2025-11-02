import React from "react";
import {Link} from 'react-router-dom';
import "./Navbar.css";
import logo from "../assets/logo.png"

const Navbar = ()=> (
    <nav className="navbar">
        <div className="navbar-left">
            <img src={logo} alt="logo" className="navbar-logo" />
        </div>

        <div className="navbar-right">
            <div>
                <Link to="/how" className="navbar-link">How It Works</Link>
                <Link to="/impact" className="navbar-link">Impact</Link>
                <Link to="/signin" className="navbar-link">Sign In</Link>
                <Link to="/get-started" className="navbar-button">Get Started</Link>
            </div>
        </div>
    </nav>
);

export default Navbar;
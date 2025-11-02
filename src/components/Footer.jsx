import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () =>(
    <footer className="footer">
        <div className="footer-section">
            <div className="footer-logo">
                <img src={logo} alt="logo" className="footer-logo" />
            </div>
            <p>Connecting communities to reduce food waste and fight hunger.</p>
        </div>

        <div className="footer-section">
            <h4>About</h4>
            <ul>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Partners</a></li>
            </ul>
        </div>

        <div className="footer-section">
            <h4>Resources</h4>
            <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Guidelines</a></li>
            <li><a href="#">Blog</a></li>
            </ul>
        </div>

        <div className="footer-section">
            <h4>Contact</h4>
            <ul>
            <li><a href="#">Email Us</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            </ul>
        </div>

        <div className="realfooter">
        <p>© {new Date().getFullYear()} ShareCare — Built for community welfare ❤️</p>
        </div>
    </footer>
)

export default Footer;
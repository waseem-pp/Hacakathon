import React from "react";
import { FaClock, FaMapMarkerAlt, FaHeart, FaUsers } from "react-icons/fa";
import "./Platform.css";

export default function App() {
  return (
    <section className="platform">
      <h1 className="platform-title">Platform Features</h1>
      <p className="platform-subtitle">
        Built with compassion and efficiency in mind
      </p>

      <div className="features-grid">
        <div className="feature-card orange">
          <div className="icon-box-orange">
            <FaClock />
          </div>
          <div className="feature-text">
            <h3>Real-Time Countdown</h3>
            <p>
              Live timers on every post create urgency and ensure quick action
            </p>
          </div>
        </div>

        <div className="feature-card green">
          <div className="icon-box-green">
            <FaMapMarkerAlt />
          </div>
          <div className="feature-text">
            <h3>Live Map View</h3>
            <p>
              Interactive map showing all available food locations in real-time
            </p>
          </div>
        </div>

        <div className="feature-card orange">
          <div className="icon-box-orange">
            <FaHeart />
          </div>
          <div className="feature-text">
            <h3>Free or Paid Options</h3>
            <p>
              Flexible pricing allows both donations and affordable food sales
            </p>
          </div>
        </div>

        <div className="feature-card green">
          <div className="icon-box-green">
            <FaUsers />
          </div>
          <div className="feature-text">
            <h3>Role-Based Access</h3>
            <p>
              Secure admin and volunteer roles with proper authentication
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

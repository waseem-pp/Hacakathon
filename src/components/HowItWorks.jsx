// src/components/HowItWorks.jsx
import React from "react";
import "./HowItWorks.css";

function Feature({ icon, title, children }) {
  return (
    <div className="hiw-feature">
      <div className="hiw-icon" aria-hidden>
        {icon}
      </div>
      <h3 className="hiw-title">{title}</h3>
      <p className="hiw-desc">{children}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="hiw-section" id="how-it-works">
      <div className="hiw-container">
        <header className="hiw-header">
          <h2 className="hiw-headline">How It Works</h2>
          <p className="hiw-sub">A simple three-step process to make a difference</p>
        </header>

        <div className="hiw-grid">
          <Feature
            title="Post Surplus Food"
            icon={
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                <path d="M8 7V4h8v3" />
              </svg>
            }
          >
            Restaurants, events, or individuals post available food with details and location
          </Feature>

          <Feature
            title="Volunteers Get Notified"
            icon={
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 8a6 6 0 1 1-12 0" />
                <circle cx="12" cy="6" r="2" />
                <path d="M3 20c2-3 6-5 9-5s7 2 9 5" />
              </svg>
            }
          >
            Nearby volunteers and NGOs receive instant notifications about available food
          </Feature>

          <Feature
            title="Pickup Arranged"
            icon={
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 11h18" />
                <path d="M7 11v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7" />
                <path d="M10 7h4" />
                <path d="M7 3h10" />
              </svg>
            }
          >
            Quick coordination ensures food reaches those in need while it's still fresh
          </Feature>
        </div>
      </div>

      <div className="hiw-bottom-gradient" />
    </section>
  );
}
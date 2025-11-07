import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="body">
      <div className="sc-hero-copy-wrap">
        <img href="assets/logo.png" alt="ShareCare logo" className="sc-hero-img" />
        <h1 className="sc-hero-title">
          Save Food.
          <span className="accent">Serve People.</span>
        </h1>
      </div>

      <aside className="sc-signup-card" role="region" aria-label="Create account">
        <form className="sc-form" id="signupForm" autoComplete="on" noValidate>
          <div className="sc-form-group">
            <input
              placeholder="Phone number, username, or email"
              name="name"
              type="text"
              required
              style={{ padding: "10px", marginBottom: "15px", borderRadius: "4px", border: "1px solid #ddd" }} // Updated style
            />
          </div>

          <div className="sc-form-row">
            <div className="sc-form-group half">
              <input
                placeholder="password"
                name="password"
                type="password"
                minLength="8"
                required
                style={{ padding: "10px", marginBottom: "15px", borderRadius: "4px", border: "1px solid #ddd" }} // Updated style
              />
            </div>

            <div
              id="error"
              className="sc-error"
              aria-live="polite"
              style={{ display: "none", color: "red", fontSize: "12px", marginTop: "10px" }} // Updated style for error message
            ></div>

            <button
              type="submit"
              className="sc-btn primary full"
              style={{
                padding: "12px",
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                width: "100%",
              }} // Updated style for the button
            >
              Log in
            </button>

            <p className="alt">
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </div>
        </form>
      </aside>
    </div>
  );
}

export default Login;

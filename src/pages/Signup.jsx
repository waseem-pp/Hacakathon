import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isValidPhone = (number) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Valid Indian mobile number (10 digits, starts 6–9)
    return phoneRegex.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPhone(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Save to localStorage (for demo)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.some((u) => u.phone === phone);

    if (exists) {
      alert("Phone number already registered. Please log in.");
      navigate("/login");
    } else {
      users.push({ name, phone, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Account created successfully!");
      navigate("/login");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Create Account</h2>
        <p>Join ShareCare to make a difference</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

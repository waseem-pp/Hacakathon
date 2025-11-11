import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaRupeeSign } from "react-icons/fa";
import "./FoodDetails.css";

export default function FoodDetails() {
  const { state } = useLocation();
  const food = state?.food;

  if (!food) {
    return (
      <div className="no-data">
        <h2>Food details not found.</h2>
        <Link to="/availablefood" className="back-link">← Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="details-page">
      <header className="details-header">
        <h1>{food.title}</h1>
        <Link to="/availablefood" className="back-link">← Back</Link>
      </header>

      <div className="details-container">
        {/* Image Section */}
        <div className="details-image">
          <img src={food.image} alt={food.title} />
          <span className="tag">{food.tag}</span>
          <span className="discount">{food.discount}</span>
        </div>

        {/* Info Section */}
        <div className="details-info">
          <h2>{food.title}</h2>
          <p className="description">{food.description}</p>

          <div className="price-section">
            <h3 className="new-price">
              <FaRupeeSign /> {food.price}
              <span className="old-price">
                <FaRupeeSign /> {food.oldPrice}
              </span>
            </h3>
          </div>

          <div className="info-row">
            <p><FaMapMarkerAlt /> {food.location}</p>
            <p><FaClock /> {food.time}</p>
          </div>

          <div className="seller-info">
            <h4>Seller Information</h4>
            <p><strong>{food.location.split(",")[0]}</strong></p>
            <p>📞 +91 9876543210</p>
            <p>✉️ contact@freshshare.com</p>
          </div>

          <button className="order-btn">Contact Now</button>
        </div>
      </div>
    </div>
  );
}

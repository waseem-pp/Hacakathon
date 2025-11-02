import React from "react";
import "./FoodCard.css";
import herosection from "../assets/herosection.jpg";

const FoodCard = () =>{
    return(
    <section className="hero">
      <div className="hero-content">
        <h1>
          Save <span className="bold-dark">Food.</span>{" "}
          <span className="bold-green">Serve People.</span>
        </h1>
        <p>
          Connect surplus food with those who need it. Join our community of donors,
          volunteers, and NGOs fighting food waste together.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Join Now</button>
          <button className="btn-outline">Learn More</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={herosection} alt="hero"/>
      </div>
    </section>
    )
}

export default FoodCard;
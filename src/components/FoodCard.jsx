import React from "react";
import "./FoodCard.css";
import herosection from "../assets/herosection.jpg";
import { Link } from "react-router-dom";

const FoodCard = () =>{
    return(
    <section className="food">
      <div className="hero-content">
        <h1>
          Save Food, Save Money,
          <span className="bold-green">Save the Planet.</span>
        </h1>
        <p>
          Join our community marketplace for surplus food. Buy fresh food at great prices or share your excess to reduce waste.
        </p>

        <div className="hero-buttons">
          <Link to="AvailableFood"><button className="btn-primary">Browse Food </button></Link>
          <Link to="PostFood"><button className="btn-outline">Post Food</button></Link>
        </div>
      </div>

      <div className="hero-image">
        <img src={herosection} alt="hero"/>
      </div>
    </section>
    )
}

export default FoodCard;
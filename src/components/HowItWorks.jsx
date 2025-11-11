import React from "react";
import { FaLeaf, FaHeart, FaUsers } from "react-icons/fa";
import "./HowItWorks.css";

const Features = () => {
  const features = [
    {
      icon: <FaLeaf className="feature-icon green" />,
      title: "Reduce Waste",
      description: "Help prevent perfectly good food from going to waste",
    },
    {
      icon: <FaHeart className="feature-icon yellow" />,
      title: "Save Money",
      description: "Get quality food at discounted prices, up to 70% off",
    },
    {
      icon: <FaUsers className="feature-icon green" />,
      title: "Build Community",
      description: "Connect with local businesses and neighbors",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon-wrapper">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

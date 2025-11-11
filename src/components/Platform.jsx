import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./Platform.css";

const Featured = () => {
  const items = [
    {
      id: 1,
      title: "Chicken Dum Biriyani",
      description:
        "a mixed rice dish from the Indian subcontinent made with spices, rice (typically basmati), and a protein like meat, fish, or vegetables",
      image:
        "./src/assets/biriyani.jpg",
      tag: "Prepared",
      discount: "50% OFF",
      price: 75,
      oldPrice: 150,
      location: "Raj Hotel, Karnataka",
      time: "Today",
    },
    {
      id: 2,
      title: "Chicken Fried Rice",
      description:
        "a popular dish of cooked rice stir-fried in a wok or pan with other ingredients like eggs, vegetables, and meat or seafood",
      image:
        "./src/assets/friedrice.jpg",
      tag: "Prepared",
      discount: "50% OFF",
      price: 50,
      oldPrice: 100,
      location: "Red Chillies, Karnataka",
      time: "Today",
    },
    {
      id: 3,
      title: "Gulab Jamun",
      description:
        "a soft, spongy, milk-solid-based Indian dessert made of deep-fried balls soaked in a fragrant sugar syrup, often flavored with cardamom, rose water, or saffron",
      image:
        "./src/assets/gulabjamuns.jpg",
      tag: "Prepared",
      discount: "50% OFF",
      price: 35,
      oldPrice: 70,
      location: "Bella Italia, Karnataka",
      time: "Today",
    },
  ];

  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2>Featured Today</h2>
        <a href="#" className="view-all">
          View All →
        </a>
      </div>

      <div className="featured-grid">
        {items.map((item) => (
          <div key={item.id} className="featured-card">
            <div className="image-container">
              <img src={item.image} alt={item.title} />
              <span className="tag">{item.tag}</span>
              <span className="discount">{item.discount}</span>
            </div>

            <div className="featured-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="info">
                <span>
                  <FaMapMarkerAlt /> {item.location}
                </span>
                <span>
                  <FaClock /> {item.time}
                </span>
              </div>

              <div className="price-row">
                <div className="price">
                  <strong>₹{item.price}</strong>{" "}
                  <span className="old-price">₹{item.oldPrice}</span>
                </div>
                <button className="details-btn">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;

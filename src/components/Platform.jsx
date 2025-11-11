import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./Platform.css";

const Featured = () => {
  const items = [
    {
      id: 1,
      title: "Fresh Bakery Bundle",
      description:
        "Assorted breads and pastries from local bakery. Perfect condition, just closing time surplus!",
      image:
        "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80",
      tag: "Bakery",
      discount: "60% OFF",
      price: 8,
      oldPrice: 20,
      location: "Downtown Bakery",
      time: "Today",
    },
    {
      id: 2,
      title: "Organic Vegetable Box",
      description:
        "Mixed seasonal vegetables, slightly imperfect but delicious. Great for cooking!",
      image:
        "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=80",
      tag: "Vegetable",
      discount: "52% OFF",
      price: 12,
      oldPrice: 25,
      location: "Green Farm Market",
      time: "2 days",
    },
    {
      id: 3,
      title: "Restaurant Meal Packs",
      description:
        "Quality prepared meals from Italian restaurant. Ready to heat and enjoy!",
      image:
        "https://images.unsplash.com/photo-1604908177225-06f982ffb3a0?auto=format&fit=crop&w=800&q=80",
      tag: "Prepared",
      discount: "57% OFF",
      price: 15,
      oldPrice: 35,
      location: "Bella Italia",
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
                  <strong>${item.price}</strong>{" "}
                  <span className="old-price">${item.oldPrice}</span>
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

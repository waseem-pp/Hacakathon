import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaSearch } from "react-icons/fa";
import "./Availablefood.css";

const foodList = [
  {
    id: 1,
    title: "Fresh Bakery Bundle",
    location: "Downtown Bakery",
    quantity: "10 plates",
    expiry: "Today",
    price: 8,
    oldPrice: 20,
    tag: "Bakery",
    discount: "60% OFF",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Organic Vegetable Box",
    location: "Green Farm Market",
    quantity: "5 boxes",
    expiry: "2 days",
    price: 12,
    oldPrice: 25,
    tag: "Vegetables",
    discount: "52% OFF",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Restaurant Meal Packs",
    location: "Bella Italia",
    quantity: "8 packs",
    expiry: "Today",
    price: 15,
    oldPrice: 35,
    tag: "Prepared",
    discount: "57% OFF",
    image:
      "https://images.unsplash.com/photo-1604908177225-06f982ffb3a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Fruit Medley",
    location: "City Market",
    quantity: "10 packs",
    expiry: "2 days",
    price: 10,
    oldPrice: 20,
    tag: "Fruits",
    discount: "55% OFF",
    image:
      "https://images.unsplash.com/photo-1574226516831-e1dff420e12e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BrowseSurplusFood() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const checkLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.phone;
  };

  const handleAction = async (food, action) => {
    if (!checkLogin()) {
      alert("Please log in first!");
      navigate("/login");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const endpoint =
      action === "order"
        ? "http://localhost:5000/api/order"
        : "http://localhost:5000/api/cart";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userPhone: user.phone,
          foodId: food.id,
          foodTitle: food.title,
          quantity: food.quantity,
        }),
      });

      if (res.ok) {
        alert(
          action === "order"
            ? "Order placed successfully!"
            : `${food.title} added to cart!`
        );
      } else alert("Something went wrong. Please try again.");
    } catch (err) {
      console.error("Error:", err);
      alert("Server error. Please try again later.");
    }
  };

  const filteredFoods = foodList.filter((food) =>
    food.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="browse-page">
      {/* Header Section */}
      <header className="browse-header">
        <h1>Browse Surplus Food</h1>
        <p>Discover fresh food at great prices near you</p>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <div className="search-input">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select className="category-dropdown">
          <option>All Categories</option>
          <option>Bakery</option>
          <option>Vegetables</option>
          <option>Prepared</option>
          <option>Fruits</option>
        </select>
      </div>

      {/* Food Grid */}
      <div className="food-grid">
        {filteredFoods.map((food) => (
          <div key={food.id} className="food-card">
            <div className="food-image-container">
              <img src={food.image} alt={food.title} />
              <span className="food-tag">{food.tag}</span>
              <span className="discount">{food.discount}</span>
            </div>

            <div className="food-content">
              <h3>{food.title}</h3>
              <p>
                Assorted {food.tag.toLowerCase()} items. Perfect for sharing or
                saving!
              </p>

              <div className="info">
                <span>
                  <FaMapMarkerAlt /> {food.location}
                </span>
                <span>
                  <FaClock /> {food.expiry}
                </span>
              </div>

              <div className="price-row">
                <div className="price">
                  <strong>${food.price}</strong>
                  <span className="old-price">${food.oldPrice}</span>
                </div>
                <button
                  className="details-btn"
                  onClick={() => handleAction(food, "order")}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

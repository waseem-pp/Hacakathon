import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaSearch } from "react-icons/fa";
import "./Availablefood.css";

const foodList = [
  {
    id: 1,
    title: "Chicken Dum Biriyani",
    description:
      "A mixed rice dish from the Indian subcontinent made with spices, rice (typically basmati), and a protein like meat, fish, or vegetables.",
    image: "./src/assets/biriyani.jpg",
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
      "A popular dish of cooked rice stir-fried in a wok or pan with other ingredients like eggs, vegetables, and meat or seafood.",
    image: "./src/assets/friedrice.jpg",
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
      "A soft, spongy, milk-solid-based Indian dessert made of deep-fried balls soaked in a fragrant sugar syrup, often flavored with cardamom, rose water, or saffron.",
    image: "./src/assets/gulabjamuns.jpg",
    tag: "Prepared",
    discount: "50% OFF",
    price: 35,
    oldPrice: 70,
    location: "Bella Italia, Karnataka",
    time: "Today",
  },
  {
    id: 4,
    title: "Parotta",
    description:
      "Layered flatbread from Southern India, made from refined wheat flour (maida) or sometimes whole wheat flour, cooked with oil or ghee and sometimes eggs.",
    image: "./src/assets/parota.jpg",
    tag: "Prepared",
    discount: "50% OFF",
    price: 30,
    oldPrice: 60,
    location: "Tasty Hut, Karnataka",
    time: "Today",
  },
  {
    id: 5,
    title: "Shawarma",
    description:
      "A popular Middle Eastern dish made of seasoned, thinly sliced meat (like lamb, beef, or chicken) stacked in a cone shape on a vertical rotisserie and cooked slowly.",
    image: "./src/assets/shawarma.jpg",
    tag: "Prepared",
    discount: "60% OFF",
    price: 40,
    oldPrice: 100,
    location: "Tasty Hut, Karnataka",
    time: "Today",
  },
  {
    id: 6,
    title: "Chicken Mandi",
    description:
      "A smoky, flavorful rice and meat dish popular in the Arabian Peninsula. Served communally and often garnished with raisins and fried onions.",
    image: "./src/assets/mandi.jpg",
    tag: "Prepared",
    discount: "50% OFF",
    price: 125,
    oldPrice: 250,
    location: "Mandi Stories, Karnataka",
    time: "Today",
  },
  {
    id: 7,
    title: "Burger",
    description:
      "A sandwich consisting of a cooked patty—traditionally ground beef, but also other meats or plant-based substitutes—placed between two halves of a sliced bun.",
    image: "./src/assets/burger.jpg",
    tag: "Prepared",
    discount: "50% OFF",
    price: 100,
    oldPrice: 200,
    location: "Grub Cafe, Karnataka",
    time: "Today",
  },
  {
    id: 8,
    title: "Ghee Rice",
    description:
      "An aromatic and flavorful one-pot meal made by cooking rice with ghee, whole spices, and garnished with fried onions, cashews, and raisins.",
    image: "./src/assets/gheerice.jpg",
    tag: "Prepared",
    discount: "50% OFF",
    price: 35,
    oldPrice: 70,
    location: "Red Chillies, Karnataka",
    time: "Today",
  },
];

export default function BrowseSurplusFood() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const checkLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.phone;
  };

  const filteredFoods = foodList.filter((food) =>
    food.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="browse-page">
      {/* Header Section */}
      <header className="browse-header">
        <h1>Browse Food</h1>
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
              <p>{food.description.slice(0, 80)}...</p>

              <div className="info">
                <span>
                  <FaMapMarkerAlt /> {food.location}
                </span>
                <span>
                  <FaClock /> {food.time}
                </span>
              </div>

              <div className="price-row">
                <div className="price">
                  <strong>₹{food.price}</strong>
                  <span className="old-price">₹{food.oldPrice}</span>
                </div>

                {/* View Details navigates to details page */}
                <Link
                  to={`/food/${food.id}`}
                  state={{ food }}
                  className="details-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

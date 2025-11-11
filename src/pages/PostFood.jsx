import React, { useState } from "react";
import "./PostFood.css";

const PostFood = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    originalPrice: "",
    category: "",
    location: "",
    bestBefore: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Food item posted successfully!");
  };

  return (
    <div className="post-container">
      <div className="post-card">
        <h2>Post Surplus Food</h2>
        <p className="subtitle">
          Help reduce waste by sharing your surplus food with the community
        </p>

        <form onSubmit={handleSubmit}>
          <label>Food Title *</label>
          <input
            type="text"
            name="title"
            placeholder="e.g., Fresh Bakery Bundle"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label>Description *</label>
          <textarea
            name="description"
            placeholder="Describe the food, its condition, and what makes it great..."
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>

          <div className="price-row">
            <div>
              <label>Your Price ($) *</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Original Price ($)</label>
              <input
                type="number"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleChange}
              />
            </div>
          </div>

          <label>Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Bakery">Bakery</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Meals">Meals</option>
            <option value="Drinks">Drinks</option>
          </select>

          <label>Location/Pickup Point *</label>
          <input
            type="text"
            name="location"
            placeholder="e.g., Downtown Bakery, 123 Main St"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <label>Best Before</label>
          <input
            type="text"
            name="bestBefore"
            placeholder="e.g., Today, 2 days, 1 week"
            value={formData.bestBefore}
            onChange={handleChange}
          />

          <label>Image URL (optional)</label>
          <input
            type="url"
            name="imageUrl"
            placeholder="https://example.com/image.jpg"
            value={formData.imageUrl}
            onChange={handleChange}
          />
          <p className="note">
            You can upload images from services like Imgur or use direct image links
          </p>

          <button type="submit" className="post-btn">
            Post Food Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostFood;

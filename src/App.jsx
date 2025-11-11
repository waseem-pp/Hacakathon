import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AvailableFood from "./pages/Availablefood";
import PostFood from "./pages/PostFood";
import FoodDetails from "./pages/FoodDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Availablefood" element={<AvailableFood />} />
      <Route path="/PostFood" element={<PostFood />} />
      <Route path="/food/:id" element={<FoodDetails />} />
    </Routes>
  );
}

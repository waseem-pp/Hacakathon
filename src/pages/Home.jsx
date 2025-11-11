import React from "react";
import FoodCard from "../components/FoodCard";
import HowItWorks from "../components/HowItWorks";
import Platform from "../components/Platform";
import Navbar from "../components/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <>
    <Navbar />
    <FoodCard />
    <HowItWorks />
    <Platform />
    </>

  );
}

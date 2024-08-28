import React from "react";
import "./FoodMenu.css";

const FoodMenu = () => {
  return (
    <div className="foodList">
      <img
        className="foodImg"
        src="https://images.unsplash.com/photo-1627207662930-0b13931df345"
        alt="pasta"
      />
      <h1>Carbonara</h1>
      <h3>Pasta</h3>
      <h2>15,000</h2>
    </div>
  );
};

export default FoodMenu;

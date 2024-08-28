import React from "react";

function FoodProps(props) {
    const {img, alt, name, menu, price} = props;
    return (
      <div className="foodList">
        <img
          className="foodImg"
          src= {img}
          alt= {alt}
        />
        <h1>{name}</h1>
        <h3>{menu}</h3>
        <h2>{price}</h2>
      </div>
    )
}

export default FoodProps;
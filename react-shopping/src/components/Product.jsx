import React from 'react';
import './Product.css';

const Product = ({ image, name, price }) => {
    return (
        <div className="product-card">
            <img 
                src={image} 
                alt={name} 
                className="product-image"
            />
            <h3 className="product-name">{name}</h3>
            <p className="product-price">{price}</p>
        </div>
    );
};

export default Product;

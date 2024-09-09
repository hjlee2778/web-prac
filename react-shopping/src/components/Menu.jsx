import { Link } from "react-router-dom";
import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/contact">Contact</Link>
        </div>
   );
};

export default Menu;

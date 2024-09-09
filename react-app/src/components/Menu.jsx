import { Link } from "react-router-dom";
import React from 'react';

const Menu = () => {
    return (
        <div>
           <Link to ="/">Home</Link> <br/>
           <Link to ="/product">Product</Link> 
        </div>
    );
};

export default Menu;
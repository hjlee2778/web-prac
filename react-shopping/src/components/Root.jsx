import React from 'react';
import Menu from './Menu';
import { Outlet } from 'react-router-dom';
import ProductList from './ProductList';  // ProductList 임포트 추가

const Root = () => {
    return (
        <div>
            <Menu/>
            <Outlet/> 
        </div>
    );
};

export default Root;

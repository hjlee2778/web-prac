import React from 'react';
import Product from './Product'; 

const ProductList = () => {

    const products = [
        {
            id: 1,
            name: 'Bowers & Wilkins PX8',
            price: '$620.00',
            image: 'https://www.schezade.co.kr/goods/img/etc_img1_B5270.jpg',
        },
        {
            id: 2,
            name: '뱅앤올룹슨 베오플레이 HX Gold',
            price: '$570.00',
            image: 'https://img.29cm.co.kr/next-product/2023/11/22/cfef1bea2d844d8d9241d9bc06f194f3_20231122171443.png?width=700',
        },
        {
            id: 3,
            name: 'AirPods Max',
            price: '$573.00',
            image: 'https://verus.co.kr/web/product/big/202312/a74295ad4171628c20eb7f50b0054fec.jpg',
        },
        {
            id: 4,
            name: 'Bose QC45',
            price: '$350.00',
            image: 'https://img.danawa.com/prod_img/500000/211/583/img/15583211_1.jpg?_v=20240307131627',
        },
        {
            id: 5,
            name: 'MOMENTUM 4 Wireless',
            price: '$245.14',
            image: 'https://kr.sennheiser-hearing.com/cdn/shop/products/momentum_4_isofront_v1.jpg?v=1660289307',
        },
        {
            id: 6,
            name: 'FOCAL BATHYS',
            price: '$498.00',
            image: 'https://img.danawa.com/prod_img/500000/817/166/img/13166817_1.jpg?_v=20240307155117',
        },
    ];

    return (
        <div className="product-list">
            {products.map(product => (
                <Product 
                    key={product.id} 
                    image={product.image} 
                    name={product.name} 
                    price={product.price} 
                />
            ))}
        </div>
    );
};

export default ProductList;

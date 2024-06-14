import React from 'react';
import ProductItem from './ProductItem';
import './PopularProducts.css';

import iN from "../../assets/excellent material/product-1.png";
import ProductImage_2 from "../../assets/excellent material/product-2.png";
import ProductImage_3 from "../../assets/excellent material/product-3.png";

const PopularProducts = () => {
  const products = [
    { imgSrc: iN, title: 'Nordic Chair', description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio' },
    { imgSrc: ProductImage_2, title: 'Kruzo Aero Chair', description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio' },
    { imgSrc: ProductImage_3, title: 'Ergonomic Chair', description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio' }
  ];

  return (
    <div className="popular-product">
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <ProductItem
              key={index}
              imgSrc={product.imgSrc}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;

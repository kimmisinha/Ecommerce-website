import React from 'react';
import './ProductItem.css';

const ProductItem = ({ imgSrc, title, description }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
      <div className="product-item-sm d-flex">
        <div className="thumbnail">
          <img src={imgSrc} alt={title} className="img-fluid" />
        </div>
        <div className="pt-3">
          <h3>{title}</h3>
          <p>{description}</p>
          <p><button className="read-more">Read More</button></p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

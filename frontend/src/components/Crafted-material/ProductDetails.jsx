import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Crafeted.css';
// import { fetchProductsRequest } from '../../redux/ProductActions';
import {fetchProductsRequest} from "../Crafted-material/ProductAction"
import { FaPlus } from 'react-icons/fa'; // Importing the Plus icon

function ProductDetails() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  return (
    <div className="crafted-container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="products-container">
        {/* Product Box 1 */}
        <div className="product-box no-image">
          <div className="product-info">
            <h3 className="product-description">
              Crafted with Excellent Material
            </h3>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <button className="explore-button">Explore</button>
          </div>
        </div>

        {products.map((product) => (
          <div key={product.id} className="product-box">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
            <div className="overlay">
              <FaPlus />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;

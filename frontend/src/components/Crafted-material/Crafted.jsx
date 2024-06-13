import React from "react";
import "./Crafeted.css";
import ProductImage_1 from "../../assets/excellent material/product-1.png";
import ProductImage_2 from "../../assets/excellent material/product-2.png";
import ProductImage_3 from "../../assets/excellent material/product-3.png";
import { FaPlus } from "react-icons/fa"; // Importing the Plus icon

function Crafted() {
  const productImages = [
    {
      image: ProductImage_1,
      name: "Club Chair",
      price: "$50",
    },
    {
      image: ProductImage_2,
      name: "Club Chair",
      price: "$80",
    },
    {
      image: ProductImage_3,
      name: "Egg Chair",
      price: "$120",
    },
  ];

  return (
    <div className="crafted-container">
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

        {/* Product Box 2 */}
        <div className="product-box">
          <img src={productImages[0].image} alt="Product 1" />
          <div className="product-info">
            <h3>{productImages[0].name}</h3>
            <p>{productImages[0].price}</p>
          </div>
          <div className="overlay">
            <FaPlus />
          </div>
        </div>

        {/* Product Box 3 */}
        <div className="product-box">
          <img src={productImages[1].image} alt="Product 2" />
          <div className="product-info">
            <h3>{productImages[1].name}</h3>
            <p>{productImages[1].price}</p>
          </div>
          <div className="overlay">
            <FaPlus />
          </div>
        </div>

        {/* Product Box 4 */}
        <div className="product-box">
          <img src={productImages[2].image} alt="Product 3" />
          <div className="product-info">
            <h3>{productImages[2].name}</h3>
            <p>{productImages[2].price}</p>
          </div>
          <div className="overlay">
            <FaPlus />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crafted;

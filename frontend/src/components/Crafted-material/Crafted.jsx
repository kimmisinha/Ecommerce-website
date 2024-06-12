import React from "react";
import "./Crafeted.css";
import ProductImage_1 from "../../assets/excellent material/product-1.png";
import ProductImage_2 from "../../assets/excellent material/product-2.png";
import ProductImage_3 from "../../assets/excellent material/product-3.png";

function Crafted() {
  const productImages = [ProductImage_1, ProductImage_2, ProductImage_3];
  return (
    <div>
      <div className="flex-container">
        <div className="text-content">
          <h1>Crafted with excellent material.</h1>
          <h2>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </h2>
        </div>
        {productImages.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt={`Product ${index + 1}`} />
            <button className="btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crafted;

import "./ModernInterior.css";
import React from 'react';
import "./ModernInterior.css";
import ProductImage_1 from "../../assets/we-help-section/img-1.jpg";
import ProductImage_2 from "../../assets/we-help-section/dots-green.svg";
import ProductImage_3 from "../../assets/we-help-section/img-2.jpg";
import ProductImage_4 from "../../assets/we-help-section/img-3.jpg";

function ModernInterior() {
  return (
    <div className="modern-interior-container">
      <div className="right-content">
        <img src={ProductImage_1} alt="Image 1" className="image1 overlap"/>
        <img src={ProductImage_2} alt="Image 2" className="image2 overlap"/>
        <img src={ProductImage_3} alt="Image 3" className="image3"/>
        <img src={ProductImage_4} alt="Image 4" className="image4"/>
      </div>
      <div className="left-content">
        <h2>We Help You Make Modern Interior Design</h2>
        <p>
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. 
          Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. 
          Pellentesque habitant morbi tristique senectus et netus et malesuada.
        </p>
        <ul className="features-list">
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
        </ul>
      </div>
    </div>
  );
}

export default ModernInterior;


import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import couchImage from "../../assets/Studio-design/couch.png";
import GreenDotImage from "../../assets/Studio-design/dots-green.svg";

import "./Interior.css";

function Interior() {
  return (
    <div>
      <div className="content">
        <div className="left-box">
          <div className="title">
            <h2 className="title-tag">Modern Interior</h2>
            <h2 className="title-tag2">Design Studio</h2>
          </div>
          <div className="description">
            <p className="content-1">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              </p>
              <p className="content-2">
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
          </div>
          <div className="buttons">
            <button className="btn orange">Learn More</button>
            <button className="btn white">Contact Us</button>
          </div>
        </div>
        <div className="right-box">
          <img src={couchImage} alt="Interior Design" />
          {/* <img src={GreenDotImage} alt="Interior Design" /> */}
        </div>
      </div>
    </div>
  );
}

export default Interior;

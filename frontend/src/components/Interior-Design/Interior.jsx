import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

import couchImage from "../../assets/Studio-design/couch.png";
import Crafted from "../Crafted-material/Crafted";
import Choose from "../Choose-us/Choose";
import './Interior.css'
function Interior() {
  return (
    <div>
      <nav className="navbar">
        <div className="left-side">
          <a href="#home" className="brand">Furni</a>
        </div>
        <div className="right-side">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
          <div className="icons">
          <a href="#user"><FaUser /></a>

            <a href="#cart"><FaShoppingCart /></a>
          </div>
        </div>
      </nav> 

      {/* <div className="content">
        <div className="left-box">
          <h2>Modern Interior Design Studio</h2>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="buttons">
            <button className="btn">Learn More</button>
            <button className="btn">Contact Us</button>
          </div>
        </div>
        <div className="right-box">
          <img src={couchImage} alt="Interior Design" />
        </div>
      </div> */}

      {/* 3box */}
      {/* <Crafted /> */}
      {/* 4box */}
      {/* <Choose /> */}
    </div>
  );
}

export default Interior;

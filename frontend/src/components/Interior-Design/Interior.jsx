import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import couchImage from '../../assets/Studio-design/couch.png';
import Crafted from '../Crafted-material/Crafted';
import Choose from "../Choose-us/Choose"
export function Interior() {
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
            <a href="#cart"><FaShoppingCart /></a>
            <a href="#user"><FaUser /></a>
          </div>
        </div>
      </nav>
      {/* 2 box */}
      <div className="content">
        <div className="left-box">
          <h2>Modern Interior Design Studio</h2>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <div className="buttons">
            <button className="btn">Learn More</button>
            <button className="btn">Contact Us</button>
          </div>
        </div>
        <div className="right-box">
          {/* <img src="data:image/jpeg;base64,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" alt="Interior Design" /> */}
          <img src={couchImage} alt="Interior Design" />
        </div>
      </div>

      {/* 3box */}
      <Crafted />
      {/* 4box */}
      <Choose />

    </div>
  );
}

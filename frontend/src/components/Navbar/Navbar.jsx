import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navbar.css";
import Interior from "../Interior-Design/Interior"
// import Crafted from "../Crafted-material/Crafted"
import ProductDetails from "../Crafted-material/ProductDetails";
import Choose from "../Choose-us/Choose"
//import ModernInterior from "../Modern-Interior /ModernInterior"
//import PopularProducts from "../ProductItem/PopularProducts"
// import Testimonials from "../Testimonials/Testimonials"

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="left-side">
          <a href="#home" className="brand">
            Furni
          </a>
        </div>
        <div className="right-side">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
          </ul>
          <div className="icons">
            <a href="#user">
              <FaUser />
            </a>

            <a href="#cart">
              <FaShoppingCart />
            </a>
          </div>
        </div>
      </nav>
      <Interior/>
      {/* <Crafted/> */}
      <ProductDetails/>
      <Choose/>
      {/* <ModernInterior/> */}
      {/* <PopularProducts /> */}
     {/* <Testimonials/> */}
    </div>
  );
}

export default Navbar;

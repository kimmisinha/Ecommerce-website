import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navbar.css";
import Interior from "../Interior-Design/Interior"
import Choose from "../Choose-us/Choose"
import Crafted from "../Crafted-material/Crafted"
import ModernInterior from "../Modern-Interior /ModernInterior"
import PopularProducts from "../ProductItem/PopularProducts"
import Testimonials from "../Testimonials/Testimonials"
import Post from "../Post/Post"
import Footer from "../Footer/Footer"
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
      <Crafted/>
      <Choose/>
      <ModernInterior/>
      <PopularProducts />
      <Testimonials/>
      <Post/>
      <Footer/>
    </div>
  );
}

export default Navbar;

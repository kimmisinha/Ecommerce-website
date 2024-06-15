import React from "react";
import "./Choose.css";
import Image_1 from "../../assets/choose-us/truck.svg";
import Image_2 from "../../assets/choose-us/bag.svg";
import Image_3 from "../../assets/choose-us/support.svg";
import Image_4 from "../../assets/choose-us/return .svg";
import OverlapImage1 from "../../assets/choose-us/dots-yellow.svg";
import OverlapImage2 from "../../assets/choose-us/why-choose-us-img.jpg";

function Choose() {
  const features = [
    { img: Image_1, title: "Fast & Free Shipping", desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
    { img: Image_2, title: "Easy to Shop", desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
    { img: Image_3, title: "24/7 Support", desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
    { img: Image_4, title: "Hassle Free Returns", desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." }
  ];

  return (
    <div className="choose-container">
      <div className="left-box">
        <h1 className="Choose">Why Choose Us</h1>
        <p className="choose2">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
        </p>
        <p className="choose3">
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="feature-box">
              <img src={feature.img} alt={feature.title} />
              <h2>{feature.title}</h2>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="right-box">
        <img src={OverlapImage2} alt="Overlap 2" className="overlap-img overlap-img1" />
        <img src={OverlapImage1} alt="Overlap 1" className="overlap-img overlap-img2" />
      </div>
    </div>
  );
}

export default Choose;

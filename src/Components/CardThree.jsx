import React, { useEffect, useRef } from "react";
import "../style/CardThree.scss";
import location from "../images/Locations 1.png";
import chevrondown from "../images/chevron-down 1.png";
import image from "../images/36279a0cd7b3397f4d61aa5fe8c67bade6dc9fcc-644x394 1.png";

const CardThree = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="card_three">
      <div className="card_three_box">
        <div className="card_three_header">
          <div className="card_three_left">
            <img src={location} alt="icon" />
            <h6>8 Hotspots</h6>
          </div>
          <div className="card_three_right">
            <span className="select_box">
              <p>This Week</p>
              <img src={chevrondown} alt="" />
            </span>
          </div>
        </div>
        <div ref={imgRef} className="img_box">
          <img src={image} alt="this is an image" />
        </div>
        <div className="card_three_content">
          <h6>8 Potential Areas to increase conversions</h6>
        </div>
      </div>
    </div>
  );
};

export default CardThree;

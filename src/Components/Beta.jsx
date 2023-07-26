import gsap from "gsap";
import React, { useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../style/beta.scss";
import Popup from "./Popup";

gsap.registerPlugin(ScrollTrigger);

const Beta = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleMarqueeClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleMouseEnterMarquee = (event) => {
    event.target.stop(); // Stop marquee animation
  };

  const handleMouseLeaveMarquee = (event) => {
    event.target.start(); // Resume marquee animation
  };
  return (
    <div className="box">
      <div className="panel beta">
        <marquee
          direction="left , right"
          behavior="alternate"
          onClick={handleMarqueeClick}
          onMouseEnter={handleMouseEnterMarquee}
          onMouseLeave={handleMouseLeaveMarquee}
        >
          ✦ Contact Us ✦ Contact Us ✦
        </marquee>
        {showPopup && <Popup onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

export default Beta;

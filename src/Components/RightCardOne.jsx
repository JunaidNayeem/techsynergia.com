import React, { useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../style/RightCardOne.scss";
import massage from "../images/Messages 1.png";
import graph from "../images/Group 402515349.png";
import chevrondown from "../images/chevron-down 1.png";

gsap.registerPlugin(ScrollTrigger);
const RightCardOne = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isLargeScreen = screenSize > 992;

  useLayoutEffect(() => {
    gsap.to(".right_card--desktop", {
      x: "-100%",
      scrollTrigger: {
        trigger: ".home",
        start: "top bottom ",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    });
  });

  return (
    <div
      className={`right_card ${
        isLargeScreen ? "right_card--desktop" : "right_card--mobile"
      }`}
    >
      <div className="card_box">
        <div className="left_box">
          <div className="heading">
            <img src={massage} alt="icon" />
            <h5>Business Leads</h5>
          </div>
          <span className="counter">+36%</span>
        </div>
        <div className="right_box">
          <div className="wapper">
            <span className="select_box">
              <p>This Week</p>
              <img src={chevrondown} alt="icon" />
            </span>
            <div className="card_img">
              <img src={graph} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCardOne;

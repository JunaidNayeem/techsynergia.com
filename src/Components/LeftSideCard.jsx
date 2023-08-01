import React, { useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../style/Leftsidecard.scss";
import chat from "../images/Chat 1.png";
import grow from "../images/trending-up-2 1.png";
import image from "../images/5e85e01d3af3025b86c80348f7a581750a88397f-1288x624 1.png";

gsap.registerPlugin(ScrollTrigger);

const LifeSideCard = () => {
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
    gsap.to(".left_card", {
      x: "100%",
      scrollTrigger: {
        trigger: ".home",
        start: "top center ",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    });
  });
  return (
    <div
      className={`left_card ${
        isLargeScreen ? "left_card_desktop" : "left_card_mobile"
      }`}
    >
      <div className="heading">
        <img src={chat} alt="icon" />
        <h6>Engagement On Websites</h6>
      </div>
      <div className="percentage">
        <h6>+77%</h6>
        <img src={grow} alt="icon" />
      </div>
      <p className="text">
        Synergia driving experiences are driving higher engagement
      </p>
      <div className="img_card">
        <img src={image} alt="img" />
      </div>
    </div>
  );
};

export default LifeSideCard;

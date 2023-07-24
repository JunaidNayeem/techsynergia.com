import React from "react";
import "../style/Card.scss";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import LifeSideCard from "../Components/LeftSideCard";
import RightCardOne from "../Components/RightCardOne";
import RightTwoCard from "../Components/RightTwoCard";
import { ScrollTrigger, gsap } from "gsap/all";
import { useEffect } from "react";
const Card = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tx = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-wrapper",
        start: "top 75%",
        end: "center 80%",
        markers: false,
        scrub: 1,
      },
    });
    tx.to(".card-new", {
      transform: "rotateX(0deg)",
    });
  });

  return (
    <div className="card-wrapper">
      <div className="card card-new">
        <div className="cards_box">
          <div className="card_inside">
            <div className="text_heading">
              <h4>Hello, Chris</h4>
            </div>
            <div className="cards">
              <CardOne />
              <CardTwo />
              <CardThree />
            </div>
          </div>
          <LifeSideCard />
          <RightCardOne />
          <RightTwoCard />
        </div>
      </div>
    </div>
  );
};

export default Card;

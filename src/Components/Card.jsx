import React from "react";
import "../style/Card.scss";
import LifeSideCard from "../Components/LeftSideCard";
import RightCardOne from "../Components/RightCardOne";
import { ScrollTrigger, gsap } from "gsap/all";
import { useEffect } from "react";
import TechStack from "./TechStack";
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
              <h4>Hello India, Time for new Tech Stack Revolution.</h4>
            </div>
            <div className="cards">{/* <TechStack /> */}</div>
          </div>
          <LifeSideCard />
          <RightCardOne />
        </div>
      </div>
    </div>
  );
};

export default Card;

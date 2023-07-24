import { useLayoutEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "../style/cardone.scss";
import calender from "../images/Calendar 1.png";
import Testsvg from "./Testsvg";
import chevrondown from "../images/chevron-down 1.png";
import { LineChart } from "../images/svj";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const CardOne = () => {
  useLayoutEffect(() => {
    gsap.defaults({ ease: "none" });

    const pulses = gsap;
    const main = gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#svg",
          start: "top center",
          end: () =>
            "+=" + document.querySelector(".theLine").getTotalLength() - 100,
          scrub: true,
          markers: false,
        },
      })
      .to(".ball01", { duration: 0.00001, autoAlpha: 1 })
      .from(".theLine", { drawSVG: 0 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      )
      .add(pulses, 0);
  });

  return (
    <div className="card_one">
      <div className="card_one_box">
        <div className="card_one_header">
          <span className="Card_one_left">
            <img src={calender} alt="icon" />
          </span>
          <div className="card_one_right">
            <h6>Pipeline Impact</h6>
            <span className="select_box">
              <p>This Week</p>
              <img src={chevrondown} alt="icon" />
            </span>
          </div>
        </div>
        <span className="card_percentage">
          <h5>+28%</h5>
        </span>
        <div className="img_box">
          <div className="img">
            <LineChart className="line_chart" />
            <Testsvg className="test_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;

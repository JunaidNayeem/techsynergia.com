import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import notifiction from "../images/Notifications 1.png";
import Email from "../images/mail 1.png";
import "../style/cardtwo.scss";

gsap.registerPlugin(ScrollTrigger);

const CardTwo = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "card-wrapper",
        start: "top 10%",
        end: "center bottom",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    //add animation code here

    tl.to(".dot,.dot2,.dot3", {
      width: "0px",
      height: "0px",
    })
      .to(".dot3", {
        width: "50px",
        height: "50px",
      })
      .to(".dot2", {
        width: "100px",
        height: "100px",
      })
      .to(".dot", {
        width: "148px",
        height: "148px",
      });
  });
  return (
    <>
      <div className="card_two">
        <div className="card_two_box">
          <div>
            <div className="card_Two_header">
              <img src={notifiction} alt="icon" />
              <h6>Form Submission</h6>
            </div>
            <div className="card_box">
              <div className="number">
                <span className="digit">+10</span>
                <span>
                  <img className="card_icon" src={Email} alt="icon" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="card_two_img hero">
            <div class="dot"></div>
            <div class="dot2"></div>
            <div class="dot3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTwo;

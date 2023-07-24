import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Bounce } from "gsap/all";
import "../style/stack.scss";
import Sidebar from "../images/Group 402515323.svg";
import reactangle from "../images/Rectangle 23.png";

import rightimg from "../images/Rectangler 23.png";

import {
  Layers,
  Vector,
  Dev,
  Myproject,
  Gap,
  Light,
  Freagmatic,
  GroupTwo,
  GroupThree,
  SalesForece,
} from "../images/svj";

const Stack = () => {
  const iconsRef = useRef(null);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              { opacity: 0, y: -150 },
              {
                duration: 2,
                opacity: 1,
                y: 0,
                ease: Bounce.easeOut,
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    );

    if (iconsRef.current) {
      observer.observe(iconsRef.current);
    }

    return () => {
      if (iconsRef.current) {
        observer.unobserve(iconsRef.current);
      }
    };
  }, []);

  return (
    <div className="stack">
      <div className="stack_heading">
        <h5>We embed in your current marketing stack</h5>
      </div>
      <div className="icon_box">
        <div className="icon_box_one">
          <img src={reactangle} alt="icon" className="left" />
          <div className="icons">
            {/* <img src={clearbit} alt="icon" /> */}
            <Vector />
          </div>
          <div
            ref={isLargeScreen ? iconsRef : null}
            className="icons  target-icon"
          >
            <Freagmatic />
          </div>
          <div className="icons">
            <Layers />
          </div>
          <div className="icons">
            <GroupTwo />
          </div>
          <div className="icons">
            <Dev />
          </div>
          <div className="icons">
            {/* <img src={Salesforcecom_logo} alt="icon" /> */}
            <SalesForece />
          </div>
          <img src={rightimg} alt="icon" className="right" />
        </div>

        <div className="icon_box_two">
          <img src={reactangle} alt="icon" className="left" />
          <div className="icons">
            {/* <img src={myproject} alt="icon" /> */}

            <Myproject />
          </div>
          <div className="icons">
            <Gap />
          </div>
          <div className="icons">
            <Light />
          </div>
          <div className="icons">
            <GroupThree />
          </div>
          <img src={rightimg} alt="icon" className="right" />
        </div>
      </div>

      {/* %%%%% mobile design %%%%%%%% */}

      <div className="icon_mobile_box">
        <div className="mobile_style">
          <img src={reactangle} alt="icon" className="left" />
          <div className="icon_mobile">
            <Vector />
          </div>
          <div
            ref={isLargeScreen ? null : iconsRef}
            className="icon_mobile target-icon"
          >
            <Freagmatic />
          </div>
          <div className="icon_mobile">
            <Layers />
          </div>
          <div className="icon_mobile">
            <GroupTwo />
          </div>
          <div className="icon_mobile">
            <Dev />
          </div>
          <div className="icon_mobile">
            <SalesForece />
          </div>
          <img src={rightimg} alt="icon" className="right" />
        </div>
      </div>
      <div className="icons_box_two">
        <img src={reactangle} alt="icon" className="right" />
        <div className="icon_mobile_two">
          <Myproject />
        </div>
        <div className="icon_mobile_two">
          <Gap />
        </div>
        <div className="icon_mobile_two">
          <Light />
        </div>
        <div className="icon_mobile_two">
          <GroupThree />
        </div>
        <img src={rightimg} alt="icon" className="right" />
      </div>
      <div className="sidebar_svg">
        <img src={Sidebar} alt="animation" />
      </div>
    </div>
  );
};

export default Stack;

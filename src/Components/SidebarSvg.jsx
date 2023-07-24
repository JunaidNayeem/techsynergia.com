import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SidebarSvg = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const motionPath = document.getElementById("motionPath");
    const dots = motionPath.querySelectorAll("path");

    gsap.set(dots, { opacity: 0 }); // Hide dots initially

    gsap.to(dots, {
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      MotionPathPlugin: {
        path: motionPath,
        align: motionPath,
        autoRotate: true,
        start: 0,
        end: 1,
      },
    });
  }, []);

  return (
    <div className="sidebar_svg test">
      <svg
        id="motionPath"
        width="185"
        height="557"
        viewBox="0 0 185 557"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            id="motionPath"
            d="M1 132.599L26.2973 147.208L51.5894 132.599V103.391L26.2973 88.7871"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M76.8867 147.208L102.184 161.812L127.481 147.208L102.184 132.599L76.8867 147.208Z"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M127.481 205.84L102.184 191.236L76.8867 205.84"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M76.8918 89.1401L102.189 103.744L127.486 89.1401"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M152.774 132.599L127.482 147.208L152.774 161.812"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M51.5898 161.812L76.8872 147.208L51.5898 132.599"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M102.184 132.599V103.723"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M102.184 190.688V161.812"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M102.188 73.8566L127.485 59.2526L152.782 73.8566V103.07L127.485 117.674"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M1 307.846L26.2973 322.455L51.5894 307.846V278.638L26.2973 264.034"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M76.8867 322.455L102.184 337.059L127.481 322.455L102.184 307.846L76.8867 322.455Z"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M127.481 381.087L102.184 366.483L76.8867 381.087"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M76.8918 264.387L102.189 278.991L127.486 264.387"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M152.774 307.846L127.482 322.455L152.774 337.059"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M51.5898 337.059L76.8872 322.455L51.5898 307.846"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M102.184 307.846V278.97"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M102.184 365.935V337.059"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M102.188 249.104L127.485 234.5L152.782 249.104V278.317L127.485 292.921"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M1 483.093L26.2973 497.702L51.5894 483.093V453.885L26.2973 439.281"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
          <path
            id="motionPath"
            d="M102.188 424.351L127.485 409.747L152.782 424.351V453.564L127.485 468.168"
            stroke="#62AB78"
            strokeWidth="0.854442"
            strokeMiterlimit="10"
          />
        </g>
      </svg>
    </div>
  );
};

export default SidebarSvg;

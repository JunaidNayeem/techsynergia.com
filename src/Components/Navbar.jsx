import React from "react";
import "../style/Navbar.scss";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 150) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <>
      <div className={`active ${show && "hidden"}`}>
        <div className="navbar_logo">
          <img src="src/images/headerBrandLogo.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;

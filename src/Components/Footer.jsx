import React from "react";
import Layer_1 from "../images/Layer_1.png";
import "../style/footer.scss";
import SidebarSvg from "./SidebarSvg";
import { Instagram, Linkedin, Twitter } from "../images/svj";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_logo">
          <img src={Layer_1} alt="footer logo" />
        </div>
        <div className="footer_box">
          <div className="footer_left">
            <div className="footer_menu">
              <ul>
                <li>
                  <a href="#" className="color">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_right">
            <h1>© 2023 Fragmatic. All rights reserved. </h1>
            <div className="footer_icon">
              <a
                href="https://www.linkedin.com/company/fragmatic/"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Ffragmatic_io"
                target="_blank"
              >
                <Twitter />
              </a>
              <a
                href="https://instagram.com/fragmatic_io?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_svg">
          <SidebarSvg />
        </div>
      </div>
    </>
  );
};

export default Footer;

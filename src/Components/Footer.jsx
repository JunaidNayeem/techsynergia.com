import React from "react";
import Group from "../images/Group.png";
import "../style/footer.scss";
import SidebarSvg from "./SidebarSvg";
import { Instagram, Linkedin, Twitter } from "../images/svj";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_logo">
          <img src={Group} alt="footer logo" />
        </div>
        <div className="footer_box">
          <div className="footer_left">
            <div className="footer_menu">
              <ul>
                <li>
                  <a href="mailto:info@techsynergia.com" target="_blank">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/80495583"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_right">
            <h1>© 2023 Tech Synergia. All rights reserved. </h1>
            <div className="footer_icon">
              <a
                href="https://www.linkedin.com/company/80495583"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a href="" target="_blank">
                <Twitter />
              </a>
              <a href="" target="_blank">
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

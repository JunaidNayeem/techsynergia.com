import React from "react";
// import { BrandLogo, CloseLogo } from "../images/svj";
import "../style/popup.scss";
import Banner from "./Banner";

const Popup = ({ onClose }) => {
  return (
    <div className="popupContainer">
      <Banner
        heading={"Get private beta access"}
        para={
          "We are currently in the process of fine-tuning our product and would greatly appreciate your assistance. Join our Beta program to actively contribute to shaping the future of presentations."
        }
        close={true}
        onClose={onClose}
      />
      <span className="text_box">
        <p className="paragraph text-up">
          By signing up, you agree to our Privacy Policy and Terms of Service
        </p>
      </span>
    </div>
  );
};

export default Popup;

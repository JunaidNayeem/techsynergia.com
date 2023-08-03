import gsap from "gsap";
import React, { useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../style/beta.scss";
import { MacosBtn } from "../images/svj";

gsap.registerPlugin(ScrollTrigger);

const Beta = () => {
  return (
    <div className="box">
      <div className="panel">
        <h1>Get In Touch</h1>
        <h4>Let’s build something awesome.</h4>
        <div className="messageCenter">
          <div className="messageHeader">
            <MacosBtn />
            <h6>New message</h6>
          </div>
          <div className="messageForm">
            <form>
              <ul>
                <label>Email:</label>
                <input type="email" placeholder="Enter your Email Address" />
              </ul>
              <ul>
                <label>Name:</label>
                <input type="text" placeholder="Enter your name" />
              </ul>
              <ul>
                <label>Subject:</label>
                <input type="text" placeholder="Enter Subject" />
              </ul>
              <hr />

              <textarea
                rows="400"
                cols="50"
                type="text"
                placeholder="Write your message here"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beta;

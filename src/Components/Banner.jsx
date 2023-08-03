import "../style/banner.scss";
import { CloseLogo } from "../images/svj";
import { useState, useEffect } from "react";
import axios from "axios";

const Banner = ({ close, heading, para, terms, onClose }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

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

  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  async function contactUs() {
    const res = await axios.post("http://localhost:5000/send", { email });
    setIsValid(res.data.isValidEmail);
    if (res.data.isValidEmail) alert("Thanks for contacting us!");
  }

  const isLargeScreen = screenSize > 992;
  return (
    <>
      <div
        className={`banner ${
          isLargeScreen ? "banner_desktop" : "banner_mobile"
        }`}
      >
        <div className="banner_box drop-in">
          <div className="banner_logo drop-in">
            <img src="src/images/BrandLogo.png" alt="brandLogo" />
          </div>
          <div className="banner_heading ">
            <h5 className="drop-up">{heading}</h5>
          </div>
          <span className="text beta-up">
            <p>{para}</p>
          </span>
          <div className="input_box input-up">
            {/* <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={handleInputChange}
            />
            <button className="Banner_btn" onClick={contactUs}>
              Contact Us
            </button>
            {!isValid && (
              <p style={{ color: "red" }}>
                Please enter a valid work email address.
              </p>
            )} */}
          </div>
        </div>
        {/* <span className="text ">
          <p className="paragraph text-up">{terms}</p>
        </span> */}
      </div>
    </>
  );
};

export default Banner;

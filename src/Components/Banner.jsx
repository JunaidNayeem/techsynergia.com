import "../style/banner.scss";
import { BrandLogo, CloseLogo } from "../images/svj";
import { useState, useEffect } from "react";

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

    // Call the email validator function here
    if (value === "") {
      setIsValid(true); // Input is empty, so consider it as valid (hide error message)
    } else {
      const isValidEmail = validateEmail(value);
      setIsValid(isValidEmail);
    }
  };

  const validateEmail = (email) => {
    // Email regex pattern for basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }
    const domain = email.split("@")[1];

    // List of common free email domains
    const commonFreeEmailDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "aol.com",
      "hotmail.co.uk",
      "hotmail.fr",
      "msn.com",
      "yahoo.fr",
      "wanadoo.fr",
      "orange.fr",
      "comcast.net",
      "yahoo.co.uk",
      "yahoo.com.br",
      "yahoo.co.in",
      "live.com",
      "rediffmail.com",
      "free.fr",
      "gmx.de",
      "web.de",
      "yandex.ru",
      "ymail.com",
      "libero.it",
      "outlook.com",
      "uol.com.br",
      "bol.com.br",
      "mail.ru",
      "cox.net",
      "hotmail.it",
      "sbcglobal.net",
      "sfr.fr",
      "live.fr",
      "verizon.net",
      "live.co.uk",
      "googlemail.com",
      "yahoo.es",
      "inbox.com",
      "icloud.com",
      "me.com",
      "mail.com",
      "yahoo.de",
      "t-online.de",
      "yahoo.it",
      "volny.cz",
      "163.com",
      "seznam.cz",
      "yahoo.com.au",
      "yahoo.com.mx",
      "yahoo.ca",
      "yahoo.co.jp",
      "protonmail.com",
      "ymail.com",
      "zoho.com",
    ];

    const isWorkDomain = !commonFreeEmailDomains.includes(domain.toLowerCase());

    return isWorkDomain;
  };

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
            <BrandLogo />
            {close ? (
              <div className="close" onClick={() => onClose()}>
                Close <CloseLogo />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="banner_heading ">
            <h5 className="drop-up">{heading}</h5>
          </div>
          <span className="text beta-up">
            <p>{para}</p>
          </span>
          <div className="input_box input-up">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={handleInputChange}
            />
            <button className="Banner_btn">Join Beta</button>
            {!isValid && (
              <p style={{ color: "red" }}>
                Please enter a valid work email address.
              </p>
            )}
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

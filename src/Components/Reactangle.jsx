import React from "react";
import "../style/reactangle.scss";
import inside from "../images/53fada904804c8847232487e74ff0e9554adc3f0-1288x624 1.png";

const Reactangle = () => {
  return (
    <div className="reactangle_box">
      <div className="img_box">
        <div className="inside_img">
          <img src={inside} alt="this is a image" />
        </div>
      </div>
    </div>
  );
};

export default Reactangle;

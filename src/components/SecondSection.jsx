import React from "react";
import rightflex from "../images/rightflex.png";
import "../styles/SecondSection.css";
import flashsale from "../images/flashsale.jpg";

function SecondSection() {
  return (
    <div className="secondsectioncontainer">
      <div className="secondSecitonContent">
        <div className="upflex">
          <div className="leftUpFlex">
            <div className="left">
              <h1>
                Collection <br /> For GIRLS
              </h1>
              <h2>Up To 40% OFF</h2>
              <button>Shop Now</button>
            </div>
            <div className="right">
              <img src={rightflex} />
            </div>
          </div>
          <div className="rightUpFlex">
            <div className="left" style={{ color: "white" }}>
              <h1>
                Collection <br /> For GIRLS
              </h1>
              <h2>Up To 40% OFF</h2>
              <button id="buttonstyle">Shop Now</button>
            </div>
            <div className="right">
              <img src={rightflex} />
            </div>
          </div>
        </div>
        <div className="downFlex">
          <div className="downFlexContent">
            <img
              src={flashsale}
              alt=""
              style={{ height: "35vh", borderRadius: "15px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;

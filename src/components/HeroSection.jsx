import React from "react";
import "../styles/herosection.css";
import leftmoder from "../images/modelleft.png";
import modelfront from "../images/modelfront.png";
import rightmodel from "../images/modelright.png";
import dhann from "../images/dhann.png";
import { useTheme } from "@mui/system";
import underhero from "../images/underherro.jpg";
function HeroSection() {
  const theme = useTheme();
  const backgroundColor = theme.palette.mode === "dark" ? "#fff" : "#fff";
  const textcolor = theme.palette.mode === "dark" ? "green" : "red";

  return (
    <>
      {" "}
      <div
        className="herosectioncontainer"
        style={{ background: backgroundColor }}
      >
        <div className="leftFlex">
          <div className="leftflexitems">
            <div className="trend">
              <h3>TRENDING COLLECTION</h3>
            </div>

            <h1>
              Exlpore Summer <br />
              Colletion
            </h1>
            <div className="button">
              <button>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="rightflex">
          <div className="backgroundDhan">
            <img src={dhann} />
          </div>
          <div className="leftmodel">
            <img src={leftmoder} />
          </div>
          <div className="frontmodel">
            <img src={modelfront} />
          </div>
          <div className="rightmodel">
            <img src={rightmodel} />
          </div>
        </div>
      </div>
      <div className="UnderHeroSection">
        <img src={underhero} alt="" />
      </div>{" "}
    </>
  );
}

export default HeroSection;

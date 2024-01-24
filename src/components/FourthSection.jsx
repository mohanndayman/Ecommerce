import React from "react";
import "../styles/FourthSection.css";
import logo from "../images/logogs.png";
import { Carousel } from "@trendyol-js/react-carousel";
import flash1 from "../images/flash1.png";
import flash2 from "../images/flash2.jpg";
import flash3 from "../images/flash3.jpg";
import flash4 from "../images/flash4.webp";
import flash5 from "../images/flash9.webp";
import flash6 from "../images/flash6.avif";
import flash7 from "../images/flash7.jpg";
export const Highlight = ({ children, text }) => (
  <div className="highlight-container" style={{ padding: "10px" }}>
    <img className="highlight-image" src={children} alt="Flash Sale" />
    <div className="highlight-text">{text}</div>
  </div>
);
function FourthSection() {
  return (
    <div className="FourthSeciontContainer">
      <div className="ForLogosimages">
        <img src={logo} />
      </div>
      <div className="forCarousel">
        <div className="flashsalescontainer">
          <div className="headline">
            Flash Sales
            <div className="sliderflash">
              <Carousel show={3.5} slide={3} swiping={true}>
                <Highlight text="Flash Sale 1">{flash1}</Highlight>
                <Highlight text="Flash Sale 2">{flash2}</Highlight>
                <Highlight text="Flash Sale 3">{flash3}</Highlight>
                <Highlight text="Flash Sale 4">{flash4}</Highlight>
                <Highlight text="Flash Sale 5">{flash5}</Highlight>
                <Highlight text="Flash Sale 6">{flash6}</Highlight>
                <Highlight text="Flash Sale 7">{flash7}</Highlight>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;

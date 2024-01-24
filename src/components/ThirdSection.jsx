import React from "react";
import "../styles/thirdsection.css";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import test from "../images/test1.webp";
import test1 from "../images/test101.webp";
import test2 from "../images/test22.webp";
import test202 from "../images/test2022.webp";
import test3 from "../images/test22.webp";
import test303 from "../images/test2022.webp";
import test4 from "../images/test3.webp";
import test404 from "../images/test303.webp";
import test5 from "../images/gg.webp";
import test505 from "../images/test505.webp";
import test6 from "../images/test6.avif";
import test606 from "../images/test606.avif";
import test1111 from "../images/1.avif";
import test10001 from "../images/1000.avif";

function ThirdSection() {
  return (
    <div className="thirdSectionContainer">
      <div className="NewArrivail">
        <h1>New Arrivals</h1>
        <br />
        <h2>Check out most promising product bought by our buyers</h2>
        <div className="buttonsforCatogery">
          <button style={{ background: "#FBD103", opacity: "1" }}>All</button>
          <button>Men</button>
          <button>Women</button>
          <button>Kids</button>
        </div>
      </div>
      <div className="forCards">
        <div className="specialoffercontainer">
          <div className="squares">
            <div className="smallsquare">
              <div className="image-container">
                <span>50%</span>
                <img src={test202} alt="Original Image" />

                <img className="hover-image" src={test2} alt="Hover Image" />
              </div>
              <div className="undersquare">
                <div className="leftflexxx">Elephant</div>
                <div className="flexxxx">
                  <div className="circle">
                    <FaHeart />
                  </div>
                  <div className="circle">
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
            </div>
            <div className="smallsquare">
              <div className="image-container">
                <span>50%</span>
                <img src={test} alt="Original Image" />

                <img className="hover-image" src={test1} alt="Hover Image" />
              </div>
              <div className="undersquare">
                <div className="leftflexxx">Elephant</div>
                <div className="flexxxx">
                  <div className="circle">
                    <FaHeart />
                  </div>
                  <div className="circle">
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
            </div>
            <div className="smallsquare">
              <div className="image-container">
                <span>50%</span>
                <img src={test1111} alt="Original Image" />

                <img
                  className="hover-image"
                  src={test10001}
                  alt="Hover Image"
                />
              </div>
              <div className="undersquare">
                <div className="leftflexxx">Elephant</div>
                <div className="flexxxx">
                  <div className="circle">
                    <FaHeart />
                  </div>
                  <div className="cart">
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
            </div>
            <div className="smallsquare">
              <div className="image-container">
                <span>50%</span>
                <img src={test6} alt="Original Image" />

                <img className="hover-image" src={test606} alt="Hover Image" />
              </div>
              <div className="undersquare">
                <div className="leftflexxx">Elephant</div>
                <div className="flexxxx">
                  <div className="circle">
                    <FaHeart />
                  </div>
                  <div className="cart">
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
            </div>
            <div className="smallsquare">
              <div className="image-container">
                <span>50%</span>
                <img src={test5} alt="Original Image" />

                <img className="hover-image" src={test505} alt="Hover Image" />
              </div>
              <div className="undersquare">
                <div className="leftflexxx">Elephant</div>
                <div className="flexxxx">
                  <div className="circle">
                    <FaHeart />
                  </div>
                  <div className="cart">
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
            </div>
            <div className="smallsquare">
              <div className="image-container">
                <span>50%</span>
                <img src={test4} alt="Original Image" />

                <img className="hover-image" src={test404} alt="Hover Image" />
              </div>
              <div className="undersquare">
                <div className="leftflexxx">Elephant</div>
                <div className="flexxxx">
                  <div className="circle">
                    <FaHeart />
                  </div>
                  <div className="cart">
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;

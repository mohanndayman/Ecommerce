import React from "react";
import "../styles/NavBar.css";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="NavBaritems">
          <h1>
            <span
              style={{ color: "red", fontWeight: "700", fontSize: "1.6rem" }}
            >
              E-
            </span>
            <span
              style={{ color: "green", fontWeight: "700", fontSize: "1.6rem" }}
            >
              {" "}
              Ecommerce
            </span>
          </h1>

          <h2>Men</h2>
          <h2>Women</h2>
          <h2>Children</h2>
          <h2>Fashion</h2>
          <h2>Sales</h2>
          <input placeholder="Search" />
          <div className="icons">
            <CiShoppingCart />
          </div>
          <div className="icons">
            <IoIosHeartEmpty />
          </div>
          <div className="icons">
            <IoPersonOutline />
          </div>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
}

export default NavBar;

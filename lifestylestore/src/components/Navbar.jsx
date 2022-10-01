import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import "../App.css";

function Navbar() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",

          alignItems: "center",
          height: "70px",
        }}
      >
        <Link to="/women">
          <img
            style={{
              width: "100px",
            }}
            src="https://www.thereportingtoday.com/wp-content/uploads/2022/07/Lifestyle-Logo.jpg?w=640"
            alt="lifeStyleBannerImage"
          />
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "25px",
          }}
        >
          <Link className="hoverEffect" to="/women">
            Women
          </Link>
          <Link className="hoverEffect" to="/men">
            Men
          </Link>
          <Link className="hoverEffect" to="/kids">
            Kids
          </Link>
          <Link className="hoverEffect" to="/shoesandbags">
            Shoes & Bags
          </Link>
          <Link className="hoverEffect" to="/beauty">
            Beauty
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FiSearch style={{ left: "20px", position: "relative" }} />
          <input
            style={{ width: "270px", textAlign: "center" }}
            type="text"
            placeholder="What are you looking for?"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <button className="hoverEffect">More</button>
          <div
            style={{
              backgroundColor: "grey",
              height: "15px",
              width: "1.5px",
              marginLeft: "-18px",
              marginTop: "3px",
            }}
          ></div>
          <button>
            <AiOutlineUser />
          </button>
          <button>
            <FiHeart />
          </button>
          <button>
            <IoBagOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

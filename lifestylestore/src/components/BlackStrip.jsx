import React from "react";
import "../App.css";

export default function Blackstrip() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: "45px",
          display: "flex",
          justifyContent: "space-around",
          color: "white",
          fontSize: "12px",
        }}
      >
        <div style={{ display: "flex", gap: "14px", width: "50%" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img
              style={{ width: "25px" }}
              src="https://i1.lmsin.net/website_images/static-pages/brand_exp/images/shipping-icon.svg"
              alt="webIcon"
            />{" "}
            <p>Free shipping</p>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img
              style={{ width: "25px" }}
              src="https://i1.lmsin.net/website_images/static-pages/brand_exp/images/clickcollect-icon.svg"
              alt="webIcon"
            />{" "}
            <p>Click & Collect</p>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img
              style={{ width: "25px" }}
              src="https://i1.lmsin.net/website_images/static-pages/brand_exp/images/clickcollect-icon.svg"
              alt="webIcon"
            />{" "}
            <p>Return To Store</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
          <p>Download Our Apps</p>
          <div
            style={{
              backgroundColor: "grey",
              height: "15px",
              width: "1.5px",
              marginLeft: "-18px",
              marginTop: "3px",
            }}
          ></div>
          <p>Store Locator</p>
          <div
            style={{
              backgroundColor: "grey",
              height: "15px",
              width: "1.5px",
              marginLeft: "-18px",
              marginTop: "3px",
            }}
          ></div>
          <p>Help</p>
        </div>
      </div>
    </>
  );
}

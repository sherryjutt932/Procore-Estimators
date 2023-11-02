import React from "react";
import "./style.css";
import wapp from "../../assets/icons/wapp.svg";
import msg from "../../assets/icons/msg.svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";

export default function Note() {
  return (
    <div className="noteCon">
      <div></div>
      <div className="detail">
        <h2>TURNAROUND TIME 24-48 HOURS!</h2>
        <p>Affordable Estimate (30% off) </p>
      </div>
      <div className="contact">
        <div>
          <p>
            <img src={wapp} alt="" />
            +1 917 300 1079
          </p>
          <p>
            <img src={msg} alt="" />
            Dave@procoreestimators.com
          </p>
        </div>
        <div>
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </div>
    </div>
  );
}

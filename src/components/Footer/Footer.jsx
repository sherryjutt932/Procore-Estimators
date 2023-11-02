import React from "react";
import "./style.css";
import logo from "../../assets/images/logowhite.png";
import CPlogo from "../../assets/images/CPlogo.png";
import wapp from "../../assets/icons/wapp.svg";
import msg from "../../assets/icons/msg.svg";
import loc from "../../assets/icons/loc.svg";

export default function Footer() {
  return (
    <footer>
      <div className="menu">
        <div className="logoCon">
          <img src={logo} alt="" />
          <p>
            <span>PROCORE Estimators</span> are an industry leader in providing
            accurate and reliable construction cost estimation services. We
            specialize in Quantity and Material Takeoff, Scheduling, and
            Planning for your project management needs. Our experts use advanced
            softwares and we pay close attention to detail to ensure accurate
            estimates. We provide you with accurate information in a timely
            manner, enabling you to make informed decisions and execute projects
            efficiently. Rely on PROCORE Estimators for precise and prompt cost
            estimation in construction.
          </p>
        </div>
        <div className="navigation">
          <h3>Navigation</h3>
          <h4>Service</h4>
          <h4>About us</h4>
          <h4>Payment</h4>
          <h4>Sample</h4>
        </div>
        <div className="contact">
        
        <div>
        <h3>Contact</h3>
          <div>
            <img src={loc} alt="" />
            <p>2505 Bedford Ave, Brooklyn, NY 11226, USA</p>
            </div>
          <div>
            <img src={wapp} alt="" />
            <p>+1 917 300 1079</p>
            </div>
          <div>
            <img src={msg} alt="" />
            <p>Dave@procoreestimators.com</p>
            </div>
        </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2023 Procore Estimators Designed By
        <span>
          <img src={CPlogo} alt="" />
        </span>
      </div>
    </footer>
  );
}

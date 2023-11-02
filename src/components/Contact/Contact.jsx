import React from "react";
import "./style.css";
import bg from "../../assets/images/contactbg.png";
import drive from "../../assets/images/drive.png"
import dropbox from "../../assets/images/dropbox.png"

export default function Contact() {
  return (
    <div className="contactCon">
      <div className="contactImg">
        <img src={bg} alt="" />
        <div>
          <div className="btnWrapper">
            <button>upload your plans</button>
            <div className="icons"> 
            <img src={drive} alt="" />
            <img src={dropbox} alt="" />
             </div>
          </div>
          <h3>For a quick quote based on your project scope, call us at +1 917 300 1079 or email us at <span>Dave@procoreestimators.com</span></h3>
        </div>
      </div>
    </div>
  );
}

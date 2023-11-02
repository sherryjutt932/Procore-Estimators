import React from "react";
import "./style.css";
import benefits from "../../assets/images/benefits.png";

export default function Benefits() {
  const benefitsList = [
    "Getting access to the industry standards insights.",
    "Understanding the internal project cost.",
    "Getting the most reliable mechanical estimates.",
    "Increasing the probability of high profit.",
    "Boosting their win-bid ratio.",
    " Streamlining their project activities with more confidence.",
    "Identifying the errors and flaws in their mechanical project.",
    "Mitigating the potential risk while saving their time and money.",
  ];

  const services1 = [
    "Cold Water Pipes",
    "Hot Water Pipes",
    "Vent Pipes",
    "Gas Pipes",
    "Sanitary Pipes",
    "Underground Pipes",
    "Pipe Fittings"
  ];

  const services2 = [
    "Pipe Concealment",
    "Insulations",
    "Valves",
    "Hangers",
    "Struts",
    "Supports"
  ];

  return (
    <div className="benefitsCon">
      <div className="detail">
        <div>
          <h2>Benefits of Mechanical Estimating</h2>
          <ul>
            {benefitsList.map((item, i)=>{
                return(
                    <li key={i}><span>{item}</span></li>
                );
            })}
          </ul>
        </div>

        <div>
          <h2>Our Plumbing Estimating Services</h2>
          <div className="doublelist">
          <ul>
            {services1.map((item, i)=>{
                return(
                    <li key={i}><span>{item}</span></li>
                );
            })}
          </ul>
          <ul>
            {services2.map((item, i)=>{
                return(
                    <li key={i}><span>{item}</span></li>
                );
            })}
          </ul>
          </div>
        </div>

        <div></div>
      </div>
      <div>
        <img src={benefits} alt="" />
      </div>
    </div>
  );
}

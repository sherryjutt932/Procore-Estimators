import React from 'react'
import "./style.css";
import ImgRow from './ImgRow.jsx'
import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import img4 from "../../assets/images/img4.png"
import img5 from "../../assets/images/img5.png"
import img6 from "../../assets/images/img6.png"

export default function DataSec() {
    const dataFirst = [
        {
            title:"HVAC",
            img:img1
        },
        {
            title:"Mechanical Equipment Installation",
            img:img2
        },
        {
            title:"Energy Efficiency Upgrades",
            img:img3
        },
    ];

    const dataSecond = [
        {
            title:"Piping Systems",
            img:img4
        },
        {
            title:"Fixtures and Sanitaryware",
            img:img5
        },
        {
            title:"Drainage and Water Supply",
            img:img6
        },
    ];
  return (
    <div className='dataSec'>
        
        <div className='dataCon'>
            <h2>Mechanical Estimation Data</h2>
            <div>
                <ImgRow data={dataFirst}/>
            </div>
        </div>
        <div className='dataCon'>
            <h2>Plumbing Estimation Data</h2>
            <div>
                <ImgRow data={dataSecond}/>
            </div>
        </div>

    </div>
  )
}

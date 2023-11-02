import React from 'react'
import "./style.css";

export default function GetStarted() {
  return (
    <div className='getStartedCon'>
        <h2>Are You Ready To Get Started With Us!</h2>
        <div>
            <h3>1- Upload you Plans</h3>
            <p><a href="/">Click here</a> to upload your plans. we accept PDF format and your plans can be Bid set, Schematic, Design Development, Construction document, or conceptual drawings.</p>
        </div>
        <div>
            <h3>2- Get a Quote</h3>
            <p>Quotes will be based on invoice, delivery date, and turnaround time. </p>
        </div>
        <div>
            <h3>3- Receive Estimate</h3>
            <p>Estimates will be delivered to you in EXCEL sheets comprising all the material and labor pricing with cut reports either in MasterFormat or your customized format.</p>
        </div>
    </div>
  )
}

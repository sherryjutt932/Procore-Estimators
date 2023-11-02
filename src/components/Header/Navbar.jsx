import React from 'react'
import "./style.css";
import logo from "../../assets/images/logo.png"

export default function Navbar() {

    const navlist = [
        "Home",
        "Service",
        "About us",
        "Payment",
        "Testimonials",
        "Samples",
        "Estimation fee",
        "Contact us",
    ]

  return (
    <nav>
        <img src={logo} alt="" />
        <div className='links'>
            {
                navlist.map((item, index)=>{
                    return(
                        <a href='/' key={index}>
                            {item}
                        </a>
                    )
                })
            }
            <a href="/" className='btnLink'>Get Estimate</a>
        </div>
    </nav>
  )
}

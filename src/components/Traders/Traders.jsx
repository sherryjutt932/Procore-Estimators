import React from 'react'
import "./style.css";
import img7 from "../../assets/images/img7.png"
import img8 from "../../assets/images/img8.png"
import img9 from "../../assets/images/img9.png"
import img10 from "../../assets/images/img10.png"

export default function Traders() {
    const traderslist = [
        {
            title:"General Requirement",
            img:img7
        },
        {
            title:"Site Works",
            img:img8
        },
        {
            title:"Concrete",
            img:img9
        },
        {
            title:"Masonry",
            img:img10
        },
    ];

  return (
    <div className='traderCon'>
        <h2>Take a look at our Trades</h2>
        <div>
            {
                traderslist.map((item, i)=>{
                    return(
                        <div className='DataCard' key={i}>
                            <img src={item.img} alt="" />
                        <div>
                                {item.title}
                            </div>
                    </div>
                    );
                })
            }
        </div>
    </div>
  )
}

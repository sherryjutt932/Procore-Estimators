import React from 'react'

export default function ImgRow({data}) {

  return  data.map((item, i)=>{
        return(
            <div className='DataCard' key={i}>
            <div>
                    {item.title}
                </div>
                <img src={item.img} alt="" />
        </div>
        );
    })
}

import React from 'react'
import heroImg from "../../assets/images/heroImg.png"
import "./style.css"

export default function Hero() {
  return (
    <div className='heroCon'>
        <div className='heroImg'>
        <img src={heroImg} alt="" />
        <h1>Mechanical/Plumbing</h1>
    </div>
    <div className='heroDetail'>
        <p>At <span>Procore Estimators</span>, our area of expertise lies in delivering precise and dependable mechanical and plumbing estimates. Our seasoned team of estimators grasps the complexities of mechanical and plumbing systems, offering all-encompassing and thorough estimates for your projects. Catering to both residential and commercial constructions, we factor in equipment, materials, labor, and project-specific requirements. Our unwavering commitment to providing vital information enables our clients to make well-informed decisions to ensure the success of their projects. Our mechanical and plumbing estimates form the bedrock of a triumphant construction project.</p>
    </div>
    </div>
  )
}

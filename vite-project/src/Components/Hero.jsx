import React from 'react'
import "../assets/Styles/Style.css";
import Vanlife from "../assets/Images/image 53.png"

const Hero = () => {
  return (
    <div>
        <div className='box'>
            <img src={Vanlife} alt="" />
        </div>
        <div className='box-text'>
            <h1 className='fw-bolder'>You got the travel plans, we <br/> got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. <br /> Rent the perfect van to make your perfect road trip.</p>
            <button className='w-100'>Find your van</button>
        </div>
    </div>
  )
}

export default Hero
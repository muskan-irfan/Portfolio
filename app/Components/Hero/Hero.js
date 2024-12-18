import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div id='hero' className='hero-section'>
      <h1><span>I'm Muskan Irfan,</span> <br/> Frontend Developer based in Pakistan.</h1>
      <p>I'm a Frontend Developer from Pakistan pursuing Software Engineering from City University of Science and Information Technology </p>
      <div className='btn-action'>
      <button className='hire-btn'>Hired Me</button>
      <button className='resume-btn'>My Resume</button>
      </div>
    </div>
  )
}

export default Hero

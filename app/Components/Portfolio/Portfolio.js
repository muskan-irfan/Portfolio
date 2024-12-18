import React from 'react'
import './Portfolio.css'
import Image from 'next/image'
import amazon from '../images/Amazon.jpg'
import netflix from '../images/netflix.png'
const portfolio = () => {
  return (
    <>
    <div id='portfolio' className='portfolio-section'>
      <h1>Portfolio</h1>
      <div className='portfolio-row'></div>
        <div className='portfolio-row1'></div>
    </div>
    <div className='imag'>
      <img src={amazon} />
    </div>
    <div className='imag'>
      <img src={netflix}/>
    </div>
    </>
  )
}

export default portfolio

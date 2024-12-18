import React from 'react'
import './Serices.css'
const Services = () => {
  return (
    <>
    <div id='services' className='service-section'>
        <h1 >My Services</h1>
        <div className='service-row'></div>
        <div className='service-row1'></div>
    </div>
    <div className='service-containers'>
        <div className='container'>
          <h2>01</h2>
          <h3>Database</h3>
          <p className="Service-descrip">Providing expert SQL services to help businesses manage and retrieve data efficiently.</p>
         
        </div>

        <div className='container'>
          <h2>02</h2>
          <h3>Web Design</h3>
          <p className="Service-descrip">Crafting responsive, intuitive interfaces with modern frontend tools for seamless user experiences.</p>
          
        </div>

        <div className='container'>
          <h2>03</h2>
          <h3>Web Design</h3>
          <p className="Service-descrip">Offering C++ development services, ensuring high-performance solutions tailored to your needs</p>
          
        </div>

       
    </div>
    </>
  )
}

export default Services

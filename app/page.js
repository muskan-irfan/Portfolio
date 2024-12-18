
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'


const page = () => {
  
  return (
 
    <>
    <div >
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    {/* <Portfolio/> */}
    <Contact/>
    </div>
    </>
  )
}

export default page


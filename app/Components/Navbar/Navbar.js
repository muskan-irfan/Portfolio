'use client';
import React from 'react'
import'./Navbar.css'
import Link from 'next/link';

const Navbar = () => {
  
  return (
    <div className='navbar'>

      <h3>MUSKAN <span>IRFAN</span></h3>
      <ul className='nav-list'>
        <Link className='nav' href='/Hero'>Home</Link>
        <Link className='nav' href='/about'>About</Link>
        <Link className='nav' href='/Services'>Services</Link>
    
      </ul>
      <button className='nav-btn' >Contact</button>
    </div>
  )
}

export default Navbar

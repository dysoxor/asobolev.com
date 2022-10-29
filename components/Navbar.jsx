import React from 'react'
import Image from 'next/image';
import fillA from '../assets/filla.gif'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <a href='#home' className='logo-container'>
        <div className='left-logo'>
          A
        </div>
        <div className='right-logo'>
          A
        </div>
        
      </a>
      <div className='menu-container-container'>
        <div className='menu-container'>
          <a href='#about' className='link1'>About</a>
          <a href='#skills' className='link2'>Skills</a>
          <a href='#projects' className='link3'>Projects</a>
          <a href='#contact' className='link4'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
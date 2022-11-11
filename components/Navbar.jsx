import React from 'react'

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <a href='#home' className='logo-container'>
        <div className='left-logo'>
          A
        </div>
        {isMobile ? <div className='right-logo-mobile'>A</div> : <div className='right-logo'>A</div>}
        
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
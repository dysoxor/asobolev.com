import React from 'react'

import Image from 'next/image'


import pdp from '../assets/pdp_web.png'

import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Home_screen = () => {
  return (
    <div className='home-container'>
      <div className='home-text-contact-container'>
        <div className='home-text-container'>
          <div className='home-hello-world'>
            <div className='typing-home-hello-world'><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '74px', fontWeight:'100' }}/> "hello world"</div>
          </div>
          <div className='home-name'>
            <div className='typing-home-name'><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '74px', fontWeight:'100' }} /> <span className='home-left-logo'>A</span> <span className='home-right-logo'>I'm Andrey</span></div>
          </div>
          <div className='home-title typing-home-title'>
            <div className='typing-home-title'><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '74px', fontWeight:'100' }}/> Software Engineer</div>
          </div>
        </div>
        <div className='home-link-contact-container'>
          <Link  href='/'>
            <a className='home-contact-container'>contact me</a>
          </Link>
        </div>
        
      </div>
      <div className='home-image-container'>
        <Image src={pdp} alt='andrey sobolevsky pic' width={500} height={500}/>
      </div>
    </div>
  )
}

export default Home_screen
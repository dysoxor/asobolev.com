import React, {useState, useEffect} from 'react'
import { useElapsedTime } from 'use-elapsed-time'
import Image from 'next/image'


import pdp from '../assets/pdp_carre.png'

import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { text } from '@fortawesome/fontawesome-svg-core'


const textArray = ["Software Engineer", "Data Scientist", "Full Stack Developer"]



const Home_screen = () => {
  

  return (
    <div id='home' className='home-container'>
      <div className='home-text-contact-container'>
        <div className='home-text-container'>
          <div className='home-hello-world'>
            <div className='typing-home-hello-world'><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '74px', fontWeight:'100' }}/> &quot;hello world&quot;</div>
          </div>
          <div className='home-name'>
            <div className='typing-home-name'><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '74px', fontWeight:'100' }} /> <span className='home-logo'>I&apos;m <span className='home-left-logo'>A</span><span className='home-right-logo'>A</span><span style={{marginLeft:"0.9em", color:"#eddc44"}}>ndrey</span></span></div>
          </div>
          <div className='home-title typing-home-title'>
            <div className="typing-home-title"> <ul className='titles-home-container'> <li style={{display: 'inline'}}><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '74px', fontWeight:'100' }}/> </li> <li className='software-engineer-home'><span>Software Engineer</span></li> <li className='data-scientist-home'><span>Data Scientist</span></li> <li className='full-stack-home'><span>Full Stack Developer</span></li> </ul> </div>
          </div>
        </div>
        <div className='home-link-contact-container'>
          <a className='home-contact-container button' href='#contact'>
              <div className="bottom"></div>
              <div className="top">
              <div className='label'>contact me</div>
                <div className="button-border button-border-left"></div>
                <div className="button-border button-border-top"></div>
                <div className="button-border button-border-right"></div>
                <div className="button-border button-border-bottom"></div>

              </div>
            </a>
        </div>
        
      </div>
      <div className='home-image-container'>
        <Image src={pdp} alt='andrey sobolevsky pic' width={550} height={550}/>
      </div>
    </div>
  )
}

export default Home_screen
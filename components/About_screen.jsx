import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Image from 'next/image'
import Link from 'next/link'

import cv from '../assets/cv.png'
import git from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

import { Page, Text, View, Document, BlobProvider } from 'react-pdf'

const About_screen = () => {
  return (
    <div className='about-container'>
        <div className='about-title-presentation-container'>
            <div className='about-title'>
            <FontAwesomeIcon icon={faChevronRight} style={{fontSize: '74px', fontWeight:'100' }} /><span className='about-left-name'>A</span> <span className='about-right-full-name'>Who is <span className='about-right-name'>Andrey Sobolevsky</span>?</span>
            </div>
            <div className='about-presentation'>
                <p>I’m a software engineer based in Belgium and specializing in machine learning and data science. I’m motivated to build usefull systems for the world.</p>
                <p>I’m an organized person, hard worker, always on time, curious and problem solver. </p>
                <p>I love working out in the gym, reading about productivity, finance or fantasy. I’m always in to participate to any activity and I’m spend some time watching anime and tv-shows.</p>
                <p>I want to be part of something that will help the world somehow. <a className='about-presentation-link' href='#contact'>Let’s build it together!</a></p>
            </div>
            <div className='about-socials-container'>
                <Link href='/cv.pdf'><a>get pdf</a></Link>
                <a href='https://github.com/dysoxor/personal_web/raw/master/pdf/CV.pdf' target="_blank"> <Image src={cv} alt='cv andrey sobolevsky' width={500} height={500}/> </a>
               
            </div>
        </div>
        <div className='about-timeline-desc-container'>
            <div className='about-timeline'>
                timeline
            </div>
            <div className='about-timeline-desc'>
                timeline description
            </div>
        </div>
    </div>
  )
}

export default About_screen
import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Image from 'next/image'
import Link from 'next/link'

import cv from '../assets/cv.png'
import git from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

import cvpdf from '../assets/cv.pdf'

import { Page, Text, View, Document, BlobProvider } from 'react-pdf'

const About_screen = () => {
    const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    
    // Remove the transition class 
    const about_title = document.querySelector('.about-title');
    about_title.classList.remove('about-title-transition');

    // Create the observer, same as before:
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            about_title.classList.add('about-title-transition');
        return;
        }

        about_title.classList.remove('about-title-transition');
    });
    });

    observer.observe(document.querySelector('.about-title'));
    window.addEventListener("scroll", () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));}, false);

  }, []);
  return (
    <div  id='about' className='about-container'>
        <div className='about-title-presentation-container'>
            <div className='about-outline'>
                ABOUT 
            </div>
            <div className='about-title about-title-transition'>
            <FontAwesomeIcon className='about-title-icon' icon={faChevronRight} style={{fontWeight:'100', background:'transparent' }} /> <span className='about-who-name'>Who is </span><span className='about-left-logo'>A</span><span className='about-right-logo'>A</span><span className='about-name'>ndrey Sobolevsky</span><span className='about-endname'>?</span>
            </div>
            <div className='about-presentation'>
                <p>I’m a software engineer based in Montreal and specializing in machine learning and data science. I’m motivated to build usefull systems for people and have positive impact.</p>
                <p>I’m an organized person, hard worker, always on time, curious and problem solver. </p>
                <p>I love working out in the gym, reading about productivity, finance or fantasy. I’m always in to participate to any activity and I spend some time watching anime and tv-shows.</p>
                <p>I want to be part of something that will help the world somehow. <a className='about-presentation-link' href='#contact'>Let’s build it together!</a></p>
            </div>
            <div className='about-socials-container'>
                <div className='about-icon'> <a href={cvpdf} target="_blank" rel='noreferrer'> <Image src={cv} alt='cv andrey sobolevsky' width={500} height={500}/> </a></div>
                <div className='about-icon'> <a href='https://github.com/dysoxor' target="_blank" rel='noreferrer'> <Image src={git} alt='github andrey sobolevsky' width={500} height={500}/> </a></div>
                <div className='about-icon'> <a href='https://www.linkedin.com/in/iasobolev/' target="_blank" rel='noreferrer'> <Image src={linkedin} alt='linkedin andrey sobolevsky' width={500} height={500}/> </a></div>
            </div>
        </div>
        <div className='about-timeline-desc-container'>
            <div className='about-timeline'>
            <div className="rb-container">
                <ul className="rb">
                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            September 2017 - June 2020<br/> Bachelor Degree in Engineering
                        </div>
                        <div className="item-title">Started Bachelor degree in engineering at Université libre de Bruxelles with a specialization in computer science on the last year. I was awarded the grade of bachelor in engineering sciences with distinction. </div>

                    </li>
                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            September 2020 - June 2021<br/> Master Degree in Computer Science Engineering
                        </div>
                        <div className="item-title">Started Master degree in software engineering at Université libre de Bruxelles. I was selected to be part of double diploma program the following year at the University of Montreal.</div>

                    </li>

                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            August 2021 - Present<br/> Research Master in LITIV lab
                        </div>
                        <div className="item-title">Started Master degree in software engineering at Ecole polytechnique de Montréal. I joined the LITIV research lab in computer vision and worked on a AI model that allows to generate Graphical User Interfaces.</div>

                    </li>

                    <li className="rb-item" ng-repeat="itembx">
                        <div className="timestamp">
                            August 2022 - Present<br/> Teaching Assistant
                        </div>
                        <div className="item-title">Beside studying Im also teaching assistant in INF8770 course at Ecole Polytechnique de Montreal.</div>

                    </li>

                </ul>

            </div>
            </div>
        </div>
    </div>
  )
}

export default About_screen
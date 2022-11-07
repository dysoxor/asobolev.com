import React, {useState, useEffect} from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight, faPaperPlane, fa
} from "@fortawesome/free-solid-svg-icons";


import emailjs from 'emailjs-com';

import map from '../assets/map.png'

import Image from 'next/image'

const Contact_screen = () => {


    useEffect(() => {
    
        // Remove the transition class
        const contact_title = document.querySelector('.contact-title');
        contact_title.classList.remove('contact-title-transition');
    
        // Create the observer, same as before:
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contact_title.classList.add('contact-title-transition');
            return;
            }
    
            contact_title.classList.remove('contact-title-transition');
        });
        });
    
        observer.observe(document.querySelector('.contact-title'));
        window.addEventListener("scroll", () => {
            document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));}, false);
    
      }, []);

    function sendEmail(e) {
     e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_d12yomd', 'template_0uh9bh9', e.target, 'C_VlkjlMbU_u0SuBf')
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div id='contact' className='contact-container'>
        <div className='contact-title-form-container'>
            <div className='contact-outline-container'>
                <div className='contact-outline'>
                CONTACT
                </div>
            </div>
            
            <div className='contact-title'>
                <FontAwesomeIcon icon={faChevronRight} style={{fontSize: '74px', fontWeight:'100', background:'transparent' }} /><span style={{marginLeft:'20px', background:'transparent'}}>Let&apos;s get in <span style={{color:'#eddc44', background:'transparent'}}>touch</span>!</span>
            </div>
            <form className='contact-form-container' onSubmit={sendEmail}>
                <div className='contact-name-email-container'>
                    <input className='contact-name' type="text" placeholder="Name" id="name" name="from_name" />
                    <input className='contact-email' type="email" placeholder="Email" id="email" name="from_email" />
                </div>
                <input className='contact-subject' type="text" placeholder="Subject" id="subject" name="email_subject"  />
                <textarea className='contact-message' type="text" placeholder="Message" id="message" name="html_message"  />
                <button className='contact-submit' id="submit" type='submit'>&nbsp;</button>
                
            </form>
        </div>
        <div className='contact-map-container'>
            <a href='https://www.google.com/maps/place/Polytechnique+Montr%C3%A9al/@45.5056595,-73.6157938,16.25z/data=!4m5!3m4!1s0x4cc919f2a9fc4d71:0xda267ca95684133e!8m2!3d45.5047939!4d-73.6131831' target='_blank' rel='noreferrer' style={{backgroundColor:'transparent'}}>
                <Image className='contact-map' src={map} alt='location in map' width={700} height={700} style={{backgroundColor:'transparent'}}/>
            </a>
            
        </div>
    </div>
  )
}

export default Contact_screen
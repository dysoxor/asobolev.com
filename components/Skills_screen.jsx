import React, {useState, useEffect} from 'react'

import cogs from '../assets/cogs.png'
import AI from '../assets/mlicon.png'
import web from '../assets/webdeviconY.png'

import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const Skills_screen = () => {

    const [keyboard, setKeyboard] = useState(new Array(20))
    const [loading, setLoading] = useState(true)
    
    if (loading) {
        let currKeyboard = keyboard
        for (let i = 0; i < currKeyboard.length; i++){
            if (i==0) {
                currKeyboard[i] = <div key={i} className='skills-logo'><div className='skills-logo-container'><div className='skill-A-left'>A</div><div className='skill-A-right'>A</div></div></div>
            }
            else if (i==6){
                currKeyboard[i] = <div key={i} className='skill-button first-in-row1'>skill</div>
            }
            else if (i==11){
                currKeyboard[i] = <div key={i} className='skill-button first-in-row2'>skill</div>
            }
            else if (i==18){
                currKeyboard[i] = <div key={i} className='skill-button space-button'>skill</div>
            }
            else{
                currKeyboard[i] = <div key={i} className='skill-button'>skill</div>
            }
        }
        setKeyboard(currKeyboard)
        setLoading(false)
    }

    useEffect(() => {
    
        // Remove the transition class
        const skills_title = document.querySelector('.skills-title');
        skills_title.classList.remove('skills-title-transition');
    
        // Create the observer, same as before:
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skills_title.classList.add('skills-title-transition');
            return;
            }
    
            skills_title.classList.remove('skills-title-transition');
        });
        });
    
        observer.observe(document.querySelector('.skills-title'));
        window.addEventListener("scroll", () => {
            document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));}, false);
    
      }, []);
    

  return (
    <div id='skills' className='skills-container'>
        <div className='skills-categories-container'>
            <div className='skills-category-item'>
                <div className='skills-category-title'>
                    <Image src={cogs} alt='cogs icon' width={50} height={50} style={{backgroundColor:'transparent'}}/> <span>Backend Development</span>
                </div>
                <div className='skills-category-content'>
                Data science is my main field of interest. I’ve discovered what is AI, how it works and saw the large amount of application it has. So I’ve started to highly focus this field in my studies. I had also the opportunity to work in a computer vision lab at Ecole polytechnique de Montreal which allowed me to discover the research part which is exciting.
                </div>
                <div className='skills-category-learnMore'>
                    Learn more
                </div>
            </div>

            <div className='skills-category-item'>
                <div className='skills-category-title'>
                <Image src={AI} alt='artificial intelligence icon' width={50} height={50} style={{backgroundColor:'transparent'}}/> <span>Data Science</span>
                </div>
                <div className='skills-category-content'>
                Data science is my main field of interest. I’ve discovered what is AI, how it works and saw the large amount of application it has. So I’ve started to highly focus this field in my studies. I had also the opportunity to work in a computer vision lab at Ecole polytechnique de Montreal which allowed me to discover the research part which is exciting.
                </div>
                <div className='skills-category-learnMore'>
                    Learn more
                </div>
            </div>

            <div className='skills-category-item'>
                <div className='skills-category-title'>
                <Image src={web} alt='web development icon' width={50} height={50} style={{backgroundColor:'transparent'}}/> <span>Web Development</span>
                </div>
                <div className='skills-category-content'>
                Data science is my main field of interest. I’ve discovered what is AI, how it works and saw the large amount of application it has. So I’ve started to highly focus this field in my studies. I had also the opportunity to work in a computer vision lab at Ecole polytechnique de Montreal which allowed me to discover the research part which is exciting.
                </div>
                <div className='skills-category-learnMore'>
                    Learn more
                </div>
            </div>

        </div>

        <div className='skills-title-skill-map-container'>
            <div className='skills-outline'>
                SKILLS
            </div>
            <div className='skills-title'>
                <FontAwesomeIcon icon={faChevronRight} style={{fontSize: '74px', fontWeight:'100', background:'transparent' }} /><span style={{marginLeft:'20px', background:'transparent'}}>What <span style={{color:'#eddc44', background:'transparent'}}>skills</span> are you interested by?</span>
            </div>

            <div className='skills-skill-map'>
                {keyboard.map((item) => {
                    return item
                })}
            </div>

        </div>

    </div>
  )
}

export default Skills_screen
import React, {useState, useEffect} from 'react'

import cogs from '../assets/cogs.png'
import AI from '../assets/mlicon.png'
import web from '../assets/webdeviconY.png'

import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const skills_array = [["skillbackend1", "skillbackend2", "skillbackend3"], ["skilldata1", "skilldata2", "skilldata3"], ["skillweb1", "skillweb2", "skillweb3"]]
const skills_name = ['Backend', 'Data Science', 'Web Development']
let currentSkillSet = -1
let clicked = false
const Skills_screen = () => {

    const [keyboard, setKeyboard] = useState(new Array(20))
    const [counter, setCounter] = useState(new Array(20))
    const [loading, setLoading] = useState(true)
    const [updateme, setUpdateme] = useState(0)
    const [text, setText] = useState(new Array(20))
    //const [currentSkillSet, setCurrentSkillSet] = useState(-1)
    
    if (loading) {
        let currKeyboard = keyboard
        let currCounter = counter
        let currText = text
        for (let i = 0; i < currKeyboard.length; i++){
            if (i==0) {
                currKeyboard[i] = <div key={i} className='skills-logo'><div className='skills-logo-container'><div className='skill-A-left'>A</div><div className='skill-A-right'>A</div></div></div>
            }
            else if (i==6){
                currKeyboard[i] = <div key={i} className='skill-button first-in-row1'></div>
            }
            else if (i==11){
                currKeyboard[i] = <div key={i} className='skill-button first-in-row2'></div>
            }
            else if (i==18){
                currKeyboard[i] = <div key={i} className='skill-button space-button'></div>
            }
            else{
                currKeyboard[i] = <div key={i} className='skill-button'></div>
            }
            currCounter[i] = Math.floor(Math.random() * 40);
            currCounter[18] = -1
            currText[i] = ''

        }
        setKeyboard(currKeyboard)
        setCounter(currCounter)
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

        const interval = setInterval(() => {
            
            if (loading==false) {
                let currCounter = counter
                let currKeyboard = keyboard
                let currText = text
                let specificSkills = currentSkillSet
                let setSkill = ''
                for (let i = 0; i < currCounter.length; i++){
                    currCounter[i] = currCounter[i] - 1
                    if (currCounter[i] <= 0) {
                        if (currentSkillSet == -1){
                            specificSkills = Math.floor(Math.random() * 3)
                        }
                        else{
                            setSkill = skills_name[currentSkillSet]
                        }
                        currText[i] = skills_array[specificSkills][Math.floor(Math.random() * skills_array.length)]
                        if (i==18){
                            currText[i] = setSkill
                        }
                        if (i==0) {
                            currKeyboard[i] = <div key={i} className='skills-logo'><div className='skills-logo-container'><div className='skill-A-left'>A</div><div className='skill-A-right'>A</div></div></div>
                        }
                        else if (i==6){
                            currKeyboard[i] = <div key={i} className='skill-button-active first-in-row1' >{currText[i]}</div>
                        }
                        else if (i==11){
                            currKeyboard[i] = <div key={i} className='skill-button-active first-in-row2' >{currText[i]}</div>
                        }
                        else if (i==18){
                            if (clicked == false) {
                                currKeyboard[i] = <div key={i} className='skill-button space-button' onClick={() => {currentSkillSet=-1}} >{setSkill}</div>
                            }
                            else{
                                currKeyboard[i] = <div key={i} className='skill-button-active space-button' >{setSkill}</div>
                                clicked = false
                            }
                            
                        }
                        else{
                            currKeyboard[i] = <div key={i} className='skill-button-active'>{currText[i]}</div>
                        }
                        currCounter[i] = Math.floor(Math.random() * 40);
                        currCounter[18] = -1
                        
                    }
                    else{
                        if (i==0) {
                            currKeyboard[i] = <div key={i} className='skills-logo'><div className='skills-logo-container'><div className='skill-A-left'>A</div><div className='skill-A-right'>A</div></div></div>
                        }
                        else if (i==6){
                            currKeyboard[i] = <div key={i} className='skill-button first-in-row1' >{currText[i]}</div>
                        }
                        else if (i==11){
                            currKeyboard[i] = <div key={i} className='skill-button first-in-row2' >{currText[i]}</div>
                        }
                        else if (i==18){
                            currKeyboard[i] = <div key={i} className='skill-button space-button' >{setSkill}</div>
                        }
                        else{
                            currKeyboard[i] = <div key={i} className='skill-button'>{currText[i]}</div>
                        }
                    }
                }
                setKeyboard(prev_keyboard => currKeyboard)
                setCounter(prev_counter => currCounter)
                setUpdateme(prev_update => 1 - 2*prev_update)
                setText(prev_text => currText)
            }
            
            }, 500);
        
            return () => clearInterval(interval);
    
      }, [keyboard, counter]);


    let clickSkills = (id) =>{
        currentSkillSet = id
        let currText = text
        clicked = true
        for (let i = 0; i < currText.length; i++){
            currText[i] = ''
        }
        return setText(prev_text => currText)
    }

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
                <div className='skills-category-learnMore' onClick={() => clickSkills(0)}>
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
                <div className='skills-category-learnMore' onClick={() => clickSkills(1)}>
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
                <div className='skills-category-learnMore' onClick={() => clickSkills(2)}>
                    Learn more
                </div>
            </div>

        </div>

        <div className='skills-title-skill-map-container'>
            <div className='skills-outline-container'>
                <div className='skills-outline'>
                    SKILLS
                </div>
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
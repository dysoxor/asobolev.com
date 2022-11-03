import React, {useState, useEffect} from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

import Image from 'next/image'

import { urlFor } from "../lib/client";

const Projects_screen = ({projects}) => {

  const [activeProject, setActiveProject] = useState()
  const [activeImage, setActiveImage] = useState()
  const [activeLink, setActiveLink] = useState()

  const handleOnClick = (id, image, url) => {
    setActiveProject(id)
    setActiveImage(image)
    setActiveLink(url)
  }

  useEffect(() => {
    
    // Remove the transition class
    const projects_title = document.querySelector('.projects-title');
    projects_title.classList.remove('projects-title-transition');

    // Create the observer, same as before:
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          projects_title.classList.add('projects-title-transition');
        return;
        }

        projects_title.classList.remove('projects-title-transition');
    });
    });

    observer.observe(document.querySelector('.projects-title'));
    window.addEventListener("scroll", () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));}, false);

  }, []);

  return (
    <div id='projects' className='projects-container'>
      <div className='projects-title-image-container'>
        <div className='projects-outline'>
          PROJECTS
        </div>
        <div className='projects-title'>
        <FontAwesomeIcon icon={faChevronRight} style={{fontSize: '74px', fontWeight:'100', background:'transparent' }} /><span style={{marginLeft:'20px', background:'transparent'}}>Check out my <span style={{color:'#eddc44', background:'transparent'}}>projects</span></span>
        </div>
        <div className='projects-image'>
          {activeImage ? <a href={activeLink} target="_blank" rel='noreferrer'><img src={urlFor(activeImage)} alt='cogs icon' width={800} height={500} style={{backgroundColor:'transparent', marginTop:'120px', borderRadius:'34px'}}/></a>: <div></div>}
          
        </div>
      </div>
      <div className='projects-table-scroll-container'>
        <div className='project-table-scroll-row-container'>
          <div className='projects-table-container'>
            {projects?.map((project) => <div key={project._id} className={project._id === activeProject ? 'projects-table-active-item':'projects-table-item'} onClick={() => handleOnClick(project._id, project.image, project.projectUrl)} ><span className='projects-table-name'><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '30px', fontWeight:'100', background:'transparent' }} /><span className='projects-moving-name'>{project.name}</span></span><span className='projects-table-category'>{project.category}</span></div> )}
            {projects?.map((project) => <div key={project._id} className={project._id === activeProject ? 'projects-table-active-item':'projects-table-item'} onClick={() => handleOnClick(project._id, project.image, project.projectUrl)} ><span className='projects-table-name'><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '30px', fontWeight:'100', background:'transparent' }} /><span className='projects-moving-name'>{project.name}</span></span><span className='projects-table-category'>{project.category}</span></div> )}
            {projects?.map((project) => <div key={project._id} className={project._id === activeProject ? 'projects-table-active-item':'projects-table-item'} onClick={() => handleOnClick(project._id, project.image, project.projectUrl)} ><span className='projects-table-name'><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '30px', fontWeight:'100', background:'transparent' }} /><span className='projects-moving-name'>{project.name}</span></span><span className='projects-table-category'>{project.category}</span></div> )}
            {projects?.map((project) => <div key={project._id} className={project._id === activeProject ? 'projects-table-active-item':'projects-table-item'} onClick={() => handleOnClick(project._id, project.image, project.projectUrl)} ><span className='projects-table-name'><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '30px', fontWeight:'100', background:'transparent' }} /><span className='projects-moving-name'>{project.name}</span></span><span className='projects-table-category'>{project.category}</span></div> )}
            {projects?.map((project) => <div key={project._id} className={project._id === activeProject ? 'projects-table-active-item':'projects-table-item'} onClick={() => handleOnClick(project._id, project.image, project.projectUrl)} ><span className='projects-table-name'><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '30px', fontWeight:'100', background:'transparent' }} /><span className='projects-moving-name'>{project.name}</span></span><span className='projects-table-category'>{project.category}</span></div> )}
            {projects?.map((project) => <div key={project._id} className={project._id === activeProject ? 'projects-table-active-item':'projects-table-item'} onClick={() => handleOnClick(project._id, project.image, project.projectUrl)} ><span className='projects-table-name'><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '30px', fontWeight:'100', background:'transparent' }} /><span className='projects-moving-name'>{project.name}</span></span><span className='projects-table-category'>{project.category}</span></div> )}
            {projects?.map((project) => <div key={project._id} className={project._id === activeProject ? 'projects-table-active-item':'projects-table-item'} onClick={() => handleOnClick(project._id, project.image, project.projectUrl)} ><span className='projects-table-name'><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '30px', fontWeight:'100', background:'transparent' }} /><span className='projects-moving-name'>{project.name}</span></span><span className='projects-table-category'>{project.category}</span></div> )}
            {projects?.map((project) => <div key={project._id} className={project._id === activeProject ? 'projects-table-active-item':'projects-table-item'} onClick={() => handleOnClick(project._id, project.image, project.projectUrl)} ><span className='projects-table-name'><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '30px', fontWeight:'100', background:'transparent' }} /><span className='projects-moving-name'>{project.name}</span></span><span className='projects-table-category'>{project.category}</span></div> )}
          </div>
          <div className='projects-scroll-down-container'>
            <div className='projects-scroll-down'><FontAwesomeIcon icon={faChevronLeft} style={{fontSize: '35px', fontWeight:'100', background:'transparent' }} /><FontAwesomeIcon icon={faChevronLeft} style={{fontSize: '35px', fontWeight:'100', background:'transparent' }} />Scroll Down</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Projects_screen
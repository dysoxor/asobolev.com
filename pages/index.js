import React from 'react'

import { client } from '../lib/client';

import { About_screen, Home_screen, Skills_screen, Projects_screen, Contact_screen } from '../components'

const Home = ({projects}) => {
  return (
    <div>
      <Home_screen/>
      <About_screen/>
      <Skills_screen/>
      <Projects_screen projects={projects}/>
      <Contact_screen />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "project"]';
  const projects = await client.fetch(query);

  return{
    props: { projects}
  }
}

export default Home
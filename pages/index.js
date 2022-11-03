import React from 'react'

import { About_screen, Home_screen, Skills_screen, Projects_screen } from '../components'

const Home = () => {
  return (
    <div>
      <Home_screen/>
      <About_screen/>
      <Skills_screen/>
      <Projects_screen/>
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from './Navbar'
import Aboutme from './Aboutme'
import Education from './Education'
import Contact from './Contact'
import Skills from './Skills'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Aboutme />
      <Education />
      <Skills />
      <Contact />
    </div>
  )
}

export default Landing

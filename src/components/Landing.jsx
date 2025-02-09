import React from 'react'
import Navbar from './Navbar'
import Aboutme from './Aboutme'
import Education from './Education'
import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const Landing = () => {
  return (
    
    <div className="">
      <Navbar />
      <Aboutme />
      <Education />
      <Skills />
      <Projects /> 
      <Contact />
    </div>
    
  )
}

export default Landing

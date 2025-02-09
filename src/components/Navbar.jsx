import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
     <div className="aboutme"><a href="#about">About Me</a></div>
     <div className="education"><a href="#Education">Education</a></div>
     <div className="skills"><a href="#Skills">Skills</a></div>
     <div className="projects"><a href="#Projects">Projects</a></div>
     <div className="contact"><a href="#Contact">Contact</a></div>
    </div>
  )
}

export default Navbar

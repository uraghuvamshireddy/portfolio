import React from 'react'
import Educationcard from './Educationcard'

const Education = () => {
  return (
   <div>
     <div className="eduname">
        <h1>Education</h1>
    </div>
    <div className='edu'>
      <Educationcard
        imgsrc="https://oldweb.nita.ac.in/slides/p_0006.jpg"
        level="B.Tech"
        collegeName="National Institue of Technology Agartala"
        subject="Computer Science and Engineering"
        cg="CGPA: 9.47"
      />
      <Educationcard
        imgsrc="https://www.joonsquare.com/usermanage/image/business/narayana-junior-college-thane-thane-50443/narayana-junior-college-thane-thane-logo.png"
        level="12th"
        collegeName="Narayana Junior College"
        subject="MPC"
        cg="Perecntage: 96.8"
      />
       <Educationcard
        imgsrc="https://www.educationworld.in/wp-content/uploads/2014/05/Sri-Lakshmi-High-School-Kurnool.jpg"
        level="10th"
        collegeName="Sri Lakshmi High School"
        subject="10th"
        cg="Percentage: 98.6"
      />
    </div>
   </div>
  )
}

export default Education

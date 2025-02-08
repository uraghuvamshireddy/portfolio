import React from 'react'
import { FaGithub, FaGit, FaNodeJs, FaJs, FaReact, FaDatabase } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { SiCplusplus, SiExpress, SiMongodb } from 'react-icons/si';

const skills = [
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'DSA', icon: <FaGithub /> },
    { name: 'NodeJS', icon: <FaNodeJs /> },
    { name: 'ExpressJS', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Git', icon: <FaGit /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'MySQL', icon: <DiMysql /> },
    { name: 'OOPs', icon: <FaDatabase /> },
    { name: 'DBMS', icon: <FaDatabase /> },
    { name: 'Operating System', icon: <FaDatabase /> },
  ];

const Skills = () => {
  return (
    <div className='contact1'>
      <div className="con">Skills</div>
      <div className="skills-container">
      {skills.map((skill, index) => (
        <div className="skill-box" key={index}>
          <div className="icon">{skill.icon}</div>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
    </div>
    
  )
}

export default Skills

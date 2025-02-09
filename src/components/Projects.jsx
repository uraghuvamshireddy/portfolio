import React from 'react'
import ProjectCard from './Projectcard';

const projects = [
    {
      id: 1,
      image: 'https://static.vecteezy.com/system/resources/previews/000/619/914/original/vector-restaurant-menu-design.jpg',
      title: 'Foodie',
      description: ' A dynamic food menu website where users can browse a variety of dishes, add items to their order, and easily calculate the total price. This project simplifies the ordering experience with a user-friendly interface and real-time price updates.',
      projectLink: 'https://github.com/uraghuvamshireddy/Foodie_vendor_frontend',
    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.pvZxdxAe7fBccgxPZfJSxQAAAA?rs=1&pid=ImgDetMain',
      title: 'Tracker',
      description: 'This web application allows users to track their mobile location in real-time and send an SOS alert to nearby users in case of an emergency. It is a helpful tool for personal safety, making it easier to call for help when needed.',
      projectLink: 'https://github.com/project2',
    },
    {
      id: 3,
      image: 'https://th.bing.com/th/id/OIP.xwwTwUNDb0NhWY5aSso49wHaHa?rs=1&pid=ImgDetMain',
      title: 'Micromouse',
      description: 'A grid-based game where a virtual robot (micromouse) navigates from start to end while avoiding obstacles. The goal is to find the shortest path using an algorithm that efficiently solves the maze in real-time, demonstrating pathfinding and algorithm skills.',
      projectLink: 'https://github.com/uraghuvamshireddy/Micromouse',
    },
  ];
const Projects = () => {
  return (
   <section id = "Projects"> 
     <div className='contact1'>
        <div className="con">Projects</div>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </div>
   </section>
  )
}

export default Projects

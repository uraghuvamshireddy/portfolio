import React from 'react'

const ProjectCard = ({ image, title, description, projectLink }) => {
    return (
      <div className="project-card">
        <img src={image} alt={title} className="project-card-image" />
        <div className="project-card-content">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-description">{description}</p>
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <button className="project-card-button">Open Project</button>
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;

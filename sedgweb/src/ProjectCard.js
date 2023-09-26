import React from 'react';
import './ProjectCard.css'; // Import your CSS stylesheet

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.imageSrc} alt={props.title} className="project-image" />
      <div className="project-info">
        <h2 className="project-title">{props.title}</h2>
        <p className="project-description">{props.description}</p>
        <a href={props.link} className="project-link" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

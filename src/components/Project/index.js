import React from "react";

function Project({ project }) {
  return (
    <section className="project-container">
      <div className="project-card">
        <h3>{project.name}</h3>
        <div className="project-info-container">
          <div className="project-image-container">
            <img
              src={project.image}
              alt={project.name}
              className="project-img"
            />
          </div>
          <div className="project-text-container">
            <p className="project-text">{project.description}</p>
            <a
              href={project.github}
              target="blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub
            </a>
            <a
              href={project.link}
              target="blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Deploy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

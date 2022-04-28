import React from "react";

function Project({ project }) {
  return (
    <section className="project-container">
      <div className="project-card">
        <h3>{project.name}</h3>
        <img src={project.image} alt="" />
      </div>
    </section>
  );
}

export default Project;

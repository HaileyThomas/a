import React, { useState } from "react";
import Modal from "../Modal";

import Icon from "@mdi/react";
import { mdiArrowExpand } from "@mdi/js";

function Project({ project }) {
  const [show, setShow] = useState(false);

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
              onClick={() => setShow(true)}
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
            <div className="expand-container">
              <Icon
                path={mdiArrowExpand}
                className="expand-icon"
                onClick={() => setShow(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal onClose={() => setShow(false)} show={show} />
    </section>
  );
}

export default Project;

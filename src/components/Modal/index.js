import React from "react";

import Icon from "@mdi/react";
import { mdiWindowClose } from "@mdi/js";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <section className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1 className="modal-title">{props.project.name}</h1>
          <Icon
            path={mdiWindowClose}
            className="modal-close"
            onClick={props.onClose}
          />
        </div>
        <div className="modal-body">
          <div className="modal-info-container">
            <h3 className="category-header">
              This is a{" "}
              <span className="category-span">{props.project.category}</span>{" "}
              project.
            </h3>
            <h3>Description:</h3>
            <p className="modal-description">{props.project.description}</p>
            <h3>Links:</h3>
            <a
              href={props.project.github}
              target="blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub
            </a>
            <a
              href={props.project.link}
              target="blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Deploy
            </a>
          </div>
          <div className="modal-image-container">
            <img
              src={props.project.image}
              alt={props.project.name}
              className="modal-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;

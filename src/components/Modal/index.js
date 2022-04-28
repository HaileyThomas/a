import React from "react";

import Icon from "@mdi/react";
import { mdiWindowClose } from "@mdi/js";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <section className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title">Modal Title</h1>
          <Icon
            path={mdiWindowClose}
            className="modal-close"
            onClick={props.onClose}
          />
        </div>
        <div className="modal-body">This is the modal content</div>
      </div>
    </section>
  );
};

export default Modal;

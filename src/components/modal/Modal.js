import React from "react";
import "./modal.css";

function Modal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className={"overlay"}>
      <div className={"modal_container"}>
        <h2>Are you sure you want to delete</h2>
        <div className={"modal_buttons"}>
          <button className="modal_btn" onClick={onConfirm}>
            Yes
          </button>
          <button className="modal_btn" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

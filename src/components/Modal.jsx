import React, { useState } from "react";
import './Modal.css'

const Modal = (props) => {
    const { isOpen, onClose, children, theme } = props;
    
    if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className={theme === "Light" ? "LightModal" : "DarkModal"}>
        <button className={theme === "Light" ? "LightCloseButton" : "DarkCloseButton"} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
import React, { useState } from "react";
import DataDetails from "../DataCard/DataDetails";

const Modal = ({ isOpen, setIsOpen, charecter }) => {
  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: isOpen ? "block" : "none" }}
      onClick={() => {}}
    >
      <div className="modal-content">
        <span className="close" onClick={() => setIsOpen(!isOpen)}>
          &times;
  </span>
        
        <div className="charecter-details">
          <DataDetails
            id={charecter.id}
            name={charecter.name}
            img={charecter.thumbnail}
            description={charecter.description}
            charecter={charecter}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;

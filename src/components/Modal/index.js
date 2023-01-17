import React, { useState } from "react";
import DataDetails from "../DataCard/DataDetails";

const Modal = ({ isOpen, setIsOpen }) => {
  return (
    <div id="myModal" class="modal" style={{display: isOpen?"block":"none"}} onClick={()=>setIsOpen(!isOpen)}>
      <div class="modal-content">
        <span class="close" onClick={()=>setIsOpen(!isOpen)}>&times;</span>
        <div><DataDetails/></div>
      </div>
    </div>
  );
};

export default Modal;

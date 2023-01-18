import React, { Suspense } from "react";
const DataDetails = React.lazy(() => import('../DataCard/DataDetails'));

const Modal = ({ isOpen, setIsOpen, charecter }) => {
  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: isOpen ? "block" : "none" }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
        <span className="close px-5 py-3 bg-slate-700 text-center rounded-lg cursor-pointer text-lg" onClick={() => setIsOpen(!isOpen)}>
          &times;
  </span>
        <div className="charecter-details">
        <Suspense fallback={<div>Loading...</div>}>
          <DataDetails
            id={charecter.id}
            name={charecter.name}
            img={charecter.thumbnail}
            description={charecter.description}
            charecter={charecter}
            setIsOpen={setIsOpen}
          />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Modal;

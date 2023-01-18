import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import "./DataCard.css";

const DataCard = ({ id, name, img, description, baseLink, charecter }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 card-wrapper">
      <div className="Card" onClick={() => setIsOpen(!isOpen)}>
        <div
          className="Picture"
          style={{
            height: "100%",
            backgroundImage: `url(${img.path}.${img.extension})`,
            backgroundSize: "contain",
            backgroundPosition: "top",
            borderRadius: "inherit",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="Card__gradient-overlay">
            <div className="Card-Top"></div>
            <div className="Card-Bot">
              <h1 className="text-lg">{name}</h1>
            </div>
          </div>
        </div>
        {/*<div className='card-img' style={{ backgroundImage: `url(${img.path}.${img.extension})` }} />
      <div className='card-title'>{name}</div>
    
      <div className='card-description'>
        {description ?
          description
          :
          'No description provided'
        }
      </div>*/}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} charecter={charecter} />
    </div>
  );
};

export default DataCard;

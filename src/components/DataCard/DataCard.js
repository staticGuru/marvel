import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import './DataCard.css'


const DataCard = ({ id, name, img, description, baseLink }) =>{ 
  const [isOpen,setIsOpen]=React.useState(false)
  return(
  <div className='col-lg-2 col-md-3 col-sm-4 col-xs-6 card-wrapper'>
    <div className='card-inner' onClick={()=>setIsOpen(!isOpen)}>
    
      <div className='card-img' style={{ backgroundImage: `url(${img.path}.${img.extension})` }} />
      <div className='card-title'>{name}</div>
    
      {/*<div className='card-description'>
        {description ?
          description
          :
          'No description provided'
        }
      </div>*/}
    </div>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
  </div>
)}

export default DataCard

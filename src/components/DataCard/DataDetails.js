import React from 'react'
import DataLinks from '../DataLinks'

function DataDetails({ id, name, img, description, baseLink,charecter }) {
  return (
    <div className='col-lg-2 col-md-3 col-sm-4 col-xs-6 card-wrapper' style={{width: "-webkit-fill-available"}}>
    <div className='card-inner' onClick={()=>{}}>
    <div className='card-title-details'>{name}</div>
      <div className='card-img-details' style={{ backgroundImage: `url(${img.path}.${img.extension})` }} />
    <h2 className='subTitle'>Description:</h2>
    <div className='card-description'>
        {charecter.description ?
          charecter.description
          :
          'No description provided'
        }
     
      </div>
      <div>
      <h2 className='subTitle'>Comics:</h2>
      <DataLinks items={charecter?.comics?.items}/>
      </div>
      <div>
      <h2 className='subTitle'>Series:</h2>
     <DataLinks items={charecter?.series?.items}/>
      </div>
    </div>
  </div>
  )
}

export default DataDetails

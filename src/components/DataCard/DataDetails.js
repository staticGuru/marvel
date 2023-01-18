import React from 'react'
import { connect } from 'react-redux'
import { saveOrRemoveCharecter } from '../../redux/Character/Character.actions';
import isItemSaved from '../../service/itemSaved';
import DataLinks from '../DataLinks'

function DataDetails({ id, name, img, description, baseLink,charecter,saveOrRemoveCharecter,savedCharecterList }) {
  function saveCharecters(e){
    e.stopPropagation();
    saveOrRemoveCharecter(charecter)
  }
  return (
    <div className='col-lg-2 col-md-3 col-sm-4 col-xs-6 card-wrapper' style={{width: "-webkit-fill-available"}}>
    <div className='card-inner'>
    <div onClick={(e)=>saveCharecters(e)}><h3>{!isItemSaved(charecter,savedCharecterList)?"Save":"Remove"}</h3></div>
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
const mapStateToProps = (state) => {
  return {
    charecterList: state.marvel.charecter_list,
    savedCharecterList: state.marvel.saved_charecter_list,
    searchLetter: state.marvel.search_charecter,
    offset: state.marvel.offset,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveOrRemoveCharecter: (e) => dispatch(saveOrRemoveCharecter(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DataDetails)

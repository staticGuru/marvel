import React from 'react'
import { connect } from 'react-redux'
import { setOffset, setSearchLetter } from '../../redux/Character/Character.actions';

function Search(props) {
     React.useEffect(()=>{
          props.setOffset(0);
     },[props.searchLetter])
  return (
    <div>
    <input value={props.searchLetter} placeholder="Search charecter..." onChange={(e)=>props.setSearchLetter(e.target.value)}/>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    searchLetter:state.marvel.search_charecter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setSearchLetter: (e) => dispatch(setSearchLetter(e)),
    setOffset: (e) => dispatch(setOffset(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)

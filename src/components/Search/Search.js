import React from 'react'
import { connect } from 'react-redux'
import { setOffset, setSearchLetter } from '../../redux/Character/Character.actions';

function Search(props) {
     React.useEffect(()=>{
      // Reset the offset value in search the character values
          props.setOffset(0);
     },[props.searchLetter])
  return (
    <form className="SearchBar">
    <input value={props.searchLetter} placeholder="Search over 8,000 characters..." onChange={(e)=>props.setSearchLetter(e.target.value)}/>
    </form>
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

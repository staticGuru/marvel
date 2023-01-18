import React from "react";
import { connect } from "react-redux";
import DataCard from "../components/DataCard/DataCard";
import { getSavedCharectersList } from "../redux/Character/Character.actions";

function SavedCharacters(props) {
  return (
    <div className="container mx-auto rounded-xl p-8 m-10">
    <h1 className="text-center Title">Saved Characters</h1>
    {props.savedCharecterList?.length>0?<div className="d-flex flex-column flex-1 grid grid-cols-3 gap-7">
      {props.savedCharecterList.map((charecter, index) => (
        <DataCard
          index={index}
          id={charecter.id}
          name={charecter.name}
          img={charecter.thumbnail}
          description={charecter.description}
          charecter={charecter}
        />
      ))}
      </div>:<h2 className="text-center">No Saved Characters found!!!</h2>}
    </div>
  );
}
// Manipulate the state value from redux store

const mapStateToProps = (state) => {
  return {
    savedCharecterList: state.marvel.saved_charecter_list,
  };
};
// Manipulate the actions in the redux store
const mapDispatchToProps = (dispatch) => {
  return {
    getSavedCharectersList: (e) => dispatch(getSavedCharectersList(e)),
  };
};

// connect the redux store in the component
export default connect(mapStateToProps, mapDispatchToProps)(SavedCharacters);

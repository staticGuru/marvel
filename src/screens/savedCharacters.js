import React from "react";
import { connect } from "react-redux";
import DataCard from "../components/DataCard/DataCard";
import { getSavedCharectersList } from "../redux/Character/Character.actions";

function SavedCharacters(props) {
  return (
    <div className="container mx-auto rounded-xl shadow border p-8 m-10">
    <div className="d-flex flex-column flex-1 grid grid-cols-3 gap-7">
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
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    savedCharecterList: state.marvel.saved_charecter_list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSavedCharectersList: (e) => dispatch(getSavedCharectersList(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedCharacters);

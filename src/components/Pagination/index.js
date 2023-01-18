import React from "react";
import { connect } from "react-redux";
import { setOffset } from "../../redux/Character/Character.actions";

function Pagination(props) {
  return (
    <div className="flex flex-row align-center justify-center">
      <h2 className="px-5 py-3 bg-slate-700 text-center rounded-lg mx-5 cursor-pointer text-lg" onClick={() => props.setOffset(props.offset - 3)}>Prev</h2>
      <h2 className="px-5 py-3 bg-slate-700 text-center rounded-lg mx-5 cursor-pointer text-lg" onClick={() => props.setOffset(props.offset + 3)}>Next</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    offset: state.marvel.offset,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setOffset: (e) => dispatch(setOffset(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

import React from "react";
import { connect } from "react-redux";
import { setOffset } from "../../redux/Character/Character.actions";

function Pagination(props) {
  return (
    <div className="">
      <div onClick={() => props.setOffset(props.offset - 3)}>Prev</div>
      <div onClick={() => props.setOffset(props.offset + 3)}>Next</div>
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

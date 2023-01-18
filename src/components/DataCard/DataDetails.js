import React from "react";
import { connect } from "react-redux";
import { saveOrRemoveCharecter } from "../../redux/Character/Character.actions";
import isItemSaved from "../../service/itemSaved";
import DataLinks from "../DataLinks";

function DataDetails({
  name,
  img,
  charecter,
  saveOrRemoveCharecter,
  savedCharecterList,
  setIsOpen,
}) {
  function saveCharecters(e) {
    //Prevent the event pubbling activities
    e.stopPropagation();
    saveOrRemoveCharecter(charecter);
    setIsOpen(false);
  }
  return (
    <div
      className="col-lg-2 col-md-3 col-sm-4 col-xs-6 card-wrapper"
      style={{ width: "-webkit-fill-available" }}
    >
      <div className="card-inner">
        <div onClick={(e) => saveCharecters(e)} className="float-right">
          <h2 className="px-5 py-3 bg-slate-700 text-center rounded-lg mx-5 cursor-pointer text-lg">
            {!isItemSaved(charecter, savedCharecterList) ? "Save" : "Remove"}
          </h2>
        </div>
        <h1 className="card-title-details">{name}</h1>
        <div
          className="card-img-details"
          style={{ backgroundImage: `url(${img.path}.${img.extension})` }}
        />
        <h2 className="subTitle">Description:</h2>
        <h3 className="card-description">
          {charecter.description
            ? charecter.description
            : "No description provided"}
        </h3>
        <div>
          <h2 className="subTitle">Comics:</h2>
          <DataLinks items={charecter?.comics?.items} />
        </div>
        <div>
          <h2 className="subTitle">Series:</h2>
          <DataLinks items={charecter?.series?.items} />
        </div>
        <div>
          <h2 className="subTitle">Stories:</h2>
          <DataLinks items={charecter?.stories?.items} />
        </div>
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
    saveOrRemoveCharecter: (e) => dispatch(saveOrRemoveCharecter(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DataDetails);

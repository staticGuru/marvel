import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DataCard from "../components/DataCard/DataCard";
import Pagination from "../components/Pagination";
import Search from "../components/Search/Search";
import { getCharectersList } from "../redux/Character/Character.actions";
import { getCharecterList } from "../service/api";

function Home(props) {
  React.useEffect(() => {
    async function fetchData() {
      await getCharecterList(props.searchLetter, props.offset).then((res) =>
        props.getCharectersList(res?.data?.data?.results)
      );
    }
    fetchData();
  }, [props.searchLetter, props.offset]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div className="container mx-auto rounded-xl p-8 m-10 d-flex flex-1 flex-row">
        <h2 className="text-center Title">Marvel Characters</h2>
        <div className="flex justify-center">
          <Search />

          <h2 className="px-5 py-3 bg-slate-700 text-center rounded-lg mx-5 cursor-pointer text-lg savedButton border">
            <Link to="/savedCharacters">View Saved</Link>
          </h2>
        </div>
        {/**Render the character */}
        {props.charecterList?.length > 0 ? (
          <div className="grid grid-cols-3 gap-7 m-5">
            {props.charecterList.map((charecter, index) => (
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
        ) : (
          <h2 className="text-center m-5">No Characters found!!!</h2>
        )}
        {/**Render the Pagination sections */}
        {props.charecterList?.length >= 3 && <Pagination />}
      </div>
    </div>
  );
}
// Manipulate the state value from redux store
const mapStateToProps = (state) => {
  return {
    charecterList: state.marvel.charecter_list,
    searchLetter: state.marvel.search_charecter,
    offset: state.marvel.offset,
  };
};
// Manipulate the actions in the redux store
const mapDispatchToProps = (dispatch) => {
  return {
    getCharectersList: (e) => dispatch(getCharectersList(e)),
  };
};
// connect the redux store in the component
export default connect(mapStateToProps, mapDispatchToProps)(Home);

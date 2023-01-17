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
  }, [props.searchLetter,props.offset]);
  return (
    <div className="container mx-auto rounded-xl shadow border p-8 m-10">
      <div>
        <Search />
        <div><Link to="/savedCharacters">View Saved</Link></div>
      </div>
      <div className="d-flex flex-column flex-1 grid grid-cols-4 gap-7">
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
      <Pagination/>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    charecterList: state.marvel.charecter_list,
    searchLetter: state.marvel.search_charecter,
    offset: state.marvel.offset,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCharectersList: (e) => dispatch(getCharectersList(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

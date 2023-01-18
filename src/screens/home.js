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
    <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',height:'100vh'}}>
    <div className="container mx-auto rounded-xl p-8 m-10 d-flex flex-1 flex-row">
    <h2 className="text-center Title">Marvel Characters</h2>
      <div className="flex justify-center">
        <Search />
      
      <h2 className="px-5 py-3 bg-slate-700 text-center rounded-lg mx-5 cursor-pointer text-lg"><Link to="/savedCharacters">View Saved</Link></h2>
      </div>
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
      <Pagination/>
    </div>
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

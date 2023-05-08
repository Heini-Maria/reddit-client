import React from "react";
import { useSelector, useDispatch } from "react-redux";
import searchdiy from "../../Assets/Images/searchdiy.png";
import { setSearchText } from "./SearchSlice";

function Search() {
  const searchText = useSelector((state) => state.search.searchText);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  return (
    <form className="search-bar">
      <input
        type="text"
        placeholder="Search.."
        name="q"
        value={searchText}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
      />
      <button
        type="submit"
        className="submit-button"
        onClick={handleClick}
        name="Search"
      >
        <img src={searchdiy} alt="serach icon" />
      </button>
    </form>
  );
}
export default Search;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { setSearchText } from './SearchSlice';

function Search() {
  const searchText = useSelector((state) => state.search.searchText);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  return (
    <form className="rounded-full px-3 flex border-solid border-2 border-text p-1">
      <input
        className="rounded-full  outline-none text-text"
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
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="rounded-full"
        />
      </button>
    </form>
  );
}
export default Search;

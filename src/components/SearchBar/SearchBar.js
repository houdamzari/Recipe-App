import React from "react";
import "./SearchBar.css";
import search from "../../assets/imgs/search.svg";
function SearchBar(props) {
  return (
    <>
      <div className="search-flex">
        <h2>Recipes </h2>
        <div className="searchbar">
          <img src={search} alt="search" className="searchbar-icon" />
          <input
            className="searchbar-input"
            type="text"
            placeholder="Search recipes and more"
          ></input>
        </div>
      </div>
      ;
    </>
  );
}

export default SearchBar;

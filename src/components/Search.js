import React from 'react';

function Search() {
  return (
    <div className="search_box">
      <div className="search_input">
        <i className="fa-solid fa-magnifying-glass inner_glass glass" />
        <input
          className="search_bar"
          placeholder="Search"
          aria-autocomplete="list"
          aria-label="search"
        />
      </div>
      <div className="search_button">
        <i className="fa-solid fa-magnifying-glass glass" />
      </div>
    </div>
  );
}

export default Search;

import React from "react";

// *** IMPORT STYLES HERE *** //
import "./SearchBox.css";
import "assets/commonStyles/flex.css";

// *** IMPORT ASSETS HERE *** //
import searchIcon from "assets/svg/search-icon.svg";

const SearchBox = (props) => {
  const { placeholder } = props;
  return (
    <div className="searchbox flex-row">
      <input placeholder={placeholder} className="searchbox__input" />
      <div
        role="button"
        onClick={() => {}}
        className="searchbox__icon-wrapper flex-col-cen"
        onKeyDown={() => {}}
        tabIndex="0"
      >
        <img src={searchIcon} alt="Search" className="searchbox__icon" />
      </div>
    </div>
  );
};

export default SearchBox;

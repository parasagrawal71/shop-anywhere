import React from "react";

// *** IMPORT STYLES HERE *** //
import "./SearchBox.css";

const SearchBox = (props) => {
  const { placeholder } = props;
  return (
    <div className="searchbox">
      <input placeholder={placeholder} className="searchbox__input" />
    </div>
  );
};

export default SearchBox;

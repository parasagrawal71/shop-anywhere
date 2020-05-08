import React from "react";

// *** IMPORT STYLES HERE *** //
import "./SearchBox.css";

const SearchBox = (props) => {
  const { placeholder } = props;
  return (
    <div className="searchbox-container">
      <input placeholder={placeholder} />
    </div>
  );
};

export default SearchBox;

import React from "react";

// IMPORT STYLES HERE //
import "./FilterBox.scss";
import "utils/commonStyles/flex.css";

const FilterBar = () => {
  return (
    <div className="filterbar">
      <div className="filterbar__header flex-row-sb">
        <div className="filterbar__header--left">Filters</div>
        <div className="filterbar__header--right">Clear All</div>
      </div>
    </div>
  );
};

export default FilterBar;

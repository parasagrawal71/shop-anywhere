import React, { useState } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Slider from "subComponents/slider/Slider";
import Button from "subComponents/button/Button";

// IMPORT STYLES HERE //
import "./FilterBox.scss";
import "utils/commonStyles/flex.css";

const FilterBox = () => {
  const [rangeValue, setRangeValue] = useState([10, 50]);
  const handleRangeValue = (e, newValue) => {
    setRangeValue([...newValue]);
  };

  return (
    <div className="filterbox">
      <div className="filterbox__header flex-row-sb">
        <div className="filterbox__header--left">Filters</div>
        <div className="filterbox__header--right">
          <Button btnText="Clear All" btnColor="white" btnTextColor="blue" />
        </div>
      </div>
      <div className="filterbox__price">
        <div className="filterbox__price-header">Price</div>
        <div className="filterbox__price-slider">
          <Slider
            rangeValue={rangeValue}
            handleRangeValue={handleRangeValue}
            sliderWidth="100%"
          />
        </div>
        <div className="filterbox__price-inputbox flex-row-sb">
          <div className="filterbox__price-inputbox-min">{rangeValue[0]}</div>
          <div className="filterbox__price-inputbox-max">{rangeValue[1]}</div>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;

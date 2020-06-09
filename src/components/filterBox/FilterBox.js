import React, { useState } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Slider from "subComponents/slider/Slider";
import Button from "subComponents/button/Button";
import Dropdown from "./components/dropDown/DropDown";

// IMPORT STYLES HERE //
import "./FilterBox.scss";

const brandList = [
  { brand: "a" },
  { brand: "b" },
  { brand: "c" },
  { brand: "d" },
  { brand: "e" },
  { brand: "f" },
  { brand: "g" },
];

const discountList = [
  { discount: "10%" },
  { discount: "20%" },
  { discount: "30%" },
  { discount: "40%" },
  { discount: "50%" },
  { discount: "60%" },
  { discount: "70%" },
];

const FilterBox = () => {
  const [rangeValue, setRangeValue] = useState([10, 50]);
  const handleRangeValue = (e, newValue) => {
    setRangeValue([...newValue]);
  };

  return (
    <div className="filterbox">
      <div className="filterbox__header">
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
        <div className="filterbox__price-inputbox">
          <div className="filterbox__price-inputbox-min">{rangeValue[0]}</div>
          <div className="filterbox__price-inputbox-max">{rangeValue[1]}</div>
        </div>
      </div>
      <div className="filterbox__brand">
        <Dropdown
          headerText="Brand"
          itemList={brandList}
          maxItemsVisible={4}
          itemKey="brand"
        />
      </div>
      <div className="filterbox__discount">
        <Dropdown
          headerText="Discount"
          itemList={discountList}
          maxItemsVisible={4}
          itemKey="discount"
        />
      </div>
    </div>
  );
};

export default FilterBox;

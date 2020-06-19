import React, { useState } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Button from "subComponents/button/Button";
import Checkbox from "subComponents/checkbox/Checkbox";

// IMPORT OTHERS HERE //
import "./DropDown.scss";
import { downIcon16px } from "assets/Images";

const Dropdown = (props) => {
  const { headerText, itemList, maxItemsVisible, itemKey } = props;

  // CONSTANTS
  const MAX_ITEMS_VISIBLE = Number(maxItemsVisible);

  // STATE VARIABLES
  const [showItems, setShowItems] = useState(false);
  const [numOfItemsVisible, setNumOfItemsVisible] = useState(MAX_ITEMS_VISIBLE);
  const [checked, setChecked] = useState([]);

  // METHODS
  const handleMoreLessItems = () => {
    if (numOfItemsVisible === MAX_ITEMS_VISIBLE) {
      setNumOfItemsVisible(itemList.length);
    } else {
      setNumOfItemsVisible(MAX_ITEMS_VISIBLE);
    }
  };

  return (
    <div className="dropdown">
      <div className="dropdown__header">
        <div className="dropdown__header-text">{headerText}</div>
        <button
          type="button"
          className="dropdown__header-icon"
          onClick={() => setShowItems(!showItems)}
        >
          <img src={downIcon16px} alt="dropdown" />
        </button>
      </div>
      {showItems && (
        <div className="dropdown__list">
          {itemList.slice(0, numOfItemsVisible).map((item, index) => {
            return (
              <div key={item[itemKey]} className="dropdown__list-item">
                <Checkbox
                  checked={checked[index]}
                  handleChange={() => setChecked(!checked[index])}
                  color="primary"
                />
                <div>{item[itemKey]}</div>
              </div>
            );
          })}
          <div className="dropdown__showMoreLessBtn">
            <Button
              btnText={
                numOfItemsVisible === MAX_ITEMS_VISIBLE
                  ? "Show More"
                  : "Show Less"
              }
              btnCallback={handleMoreLessItems}
              btnColor="white"
              btnTextColor="blue"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

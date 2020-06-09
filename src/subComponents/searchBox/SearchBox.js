import React, { useState, useEffect } from "react";

// IMPORTS //
import { debounce } from "utils/functions";

// IMPORT STYLES HERE //
import "./SearchBox.scss";

// IMPORT ASSETS HERE //
import searchIcon from "assets/svg/search-icon.svg";

// VARIABLES
let debouncedFunc;

const SearchBox = (props) => {
  // PROPS
  const {
    placeholder,
    suggestionsCallback,
    suggestions,
    searchCallback,
    keyNames,
  } = props;

  // STATE VARIABLES
  const [query, setQuery] = useState("");

  // HOOKS
  useEffect(() => {
    debouncedFunc = debounce(suggestionsCallback, 400);
  }, [suggestionsCallback]);

  // METHODS
  const onInputChange = (e) => {
    const q = e.target.value;
    if (q !== "") {
      setQuery(q);
      debouncedFunc(q);
    }
  };

  const onInputSubmit = () => {
    if (query !== "") {
      searchCallback(query);
    }
  };

  // eslint-disable-next-line consistent-return
  const onEnterKeyPress = (e) => {
    if (e.keyCode === 13) {
      onInputSubmit();
    } else {
      return false;
    }
  };

  // RENDER FUNCTIONS
  const renderSuggestions = () => {
    if (Array.isArray(suggestions)) {
      return suggestions.map((item) => (
        <option key={item[keyNames.id]}>{item[keyNames.name]}</option>
      ));
    }
    // console.error("SearchBox: Suggestions provided is not in Array format");
    return [];
  };

  return (
    <div className="searchbox">
      <input
        type="search"
        placeholder={placeholder}
        className="searchbox__input"
        // name="suggestions"
        list="suggestions"
        onChange={onInputChange}
        onKeyDown={onEnterKeyPress}
      />
      <datalist id="suggestions">{renderSuggestions()}</datalist>
      <div
        role="button"
        className="searchbox__icon-wrapper"
        tabIndex="0"
        onClick={onInputSubmit}
        onKeyDown={onEnterKeyPress}
      >
        <img src={searchIcon} alt="Search" className="searchbox__icon" />
      </div>
    </div>
  );
};

export default SearchBox;

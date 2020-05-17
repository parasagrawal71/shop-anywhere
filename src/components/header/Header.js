import React, { useState } from "react";

// *** IMPORTS *** //
import jsonServer from "apis/jsonServer";

// *** IMPORT USER-DEFINED COMPONENTS HERE *** //
import SearchBox from "components/searchBox/SearchBox";

// *** IMPORT STYLES HERE *** //
import "./Header.css";
import "utils/commonStyles/flex.css";

const Header = () => {
  // STATE VARIABLES
  const [suggestionsData, setSuggestionsData] = useState([]);

  // METHODS
  const fetchSuggestions = async (query) => {
    const response = await jsonServer(
      "GET",
      "suggestions",
      {},
      {
        params: { query },
        transformResponse: [
          (data) =>
            JSON.parse(data).filter((value) => value.name.startsWith(query)),
        ],
      }
    );
    setSuggestionsData(response);
  };

  const getProducts = async (query) => {
    await jsonServer(
      "GET",
      "products",
      {},
      {
        params: { query },
        transformResponse: [
          (data) =>
            JSON.parse(data).filter((value) => value.name.startsWith(query)),
        ],
      }
    );
  };

  return (
    <div className="header flex-row-sb">
      <div className="header--left flex-row-v-cen">
        <div className="header__logo">Shop Anywhere</div>
        <div className="header__searchbox">
          <SearchBox
            placeholder="Search for products"
            suggestionsCallback={fetchSuggestions}
            suggestions={suggestionsData}
            searchCallback={getProducts}
            keyNames={{ id: "id", name: "name" }}
          />
        </div>
      </div>
      <div className="header--right flex-row-v-cen">
        <div className="header__profile">My Profile</div>
        <div className="header__orders">Orders</div>
        <div className="header__cart">Cart</div>
      </div>
    </div>
  );
};

export default Header;

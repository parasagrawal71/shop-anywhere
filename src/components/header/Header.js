import React, { useState } from "react";
import { Link } from "react-router-dom";

// IMPORTS //
import jsonServer from "apis/jsonServer";

// IMPORT USER-DEFINED COMPONENTS HERE //
import SearchBox from "subComponents/searchBox/SearchBox";
import { toast } from "react-toastify";

// IMPORT STYLES HERE //
import "./Header.scss";

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
    if (Array.isArray(response)) {
      setSuggestionsData(response);
    } else {
      toast.error(response);
    }
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
        <Link to="/" className="header__logo">
          Shop Anywhere
        </Link>
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
        <Link to="/cart" className="header__cart">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;

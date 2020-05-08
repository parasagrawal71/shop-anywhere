import React from "react";

// *** IMPORT USER-DEFINED COMPONENTS HERE *** //
import SearchBox from "../searchBox/SearchBox";

// *** IMPORT STYLES HERE *** //
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <div className="header-logo">Shop Anywhere</div>
        <div className="header-searchbox">
          <SearchBox placeholder="Search for products" />
        </div>
      </div>
      <div className="header-right">
        <div className="header-profile">My Profile</div>
        <div className="header-orders">Orders</div>
        <div className="header-cart">Cart</div>
      </div>
    </div>
  );
};

export default Header;

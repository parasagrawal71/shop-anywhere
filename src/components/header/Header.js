import React from "react";

// *** IMPORT USER-DEFINED COMPONENTS HERE *** //
import SearchBox from "components/searchBox/SearchBox";

// *** IMPORT STYLES HERE *** //
import "./Header.css";
import "assets/commonStyles/flex.css";

const Header = () => {
  return (
    <div className="header flex-row-sb">
      <div className="header--left flex-row-v-cen">
        <div className="header__logo">Shop Anywhere</div>
        <div className="header__searchbox">
          <SearchBox placeholder="Search for products" />
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

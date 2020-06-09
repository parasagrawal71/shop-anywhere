import React, { useState } from "react";
import { Link } from "react-router-dom";

// IMPORTS //
import jsonServer from "apis/jsonServer";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

// IMPORT USER-DEFINED COMPONENTS HERE //
import SearchBox from "subComponents/searchBox/SearchBox";
import Toast from "subComponents/toast/Toast";
import { toast } from "react-toastify";

// IMPORT STYLES HERE //
import "./Header.scss";

// IMPORT ASSETS HERE //
import cartIcon from "assets/png/cart-24px.png";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const cartCount = 2; // TODO: REMOVE THIS LATER

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
    <>
      <Toast position="bottom-left" />
      <div className="header">
        <div className="header--left">
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
        <div className="header--right">
          <div className="header__profile">My Profile</div>
          <div className="header__orders">Orders</div>
          <Link to="/cart" className="header__cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartCount} color="secondary">
                <img className="header__cart-img" src={cartIcon} alt="cart" />
              </StyledBadge>
            </IconButton>
            <div className="header__cart-text">Cart</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

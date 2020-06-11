import React, { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { toast } from "react-toastify";

// IMPORT USER-DEFINED COMPONENTS HERE //
import SearchBox from "subComponents/searchBox/SearchBox";
import Toast from "subComponents/toast/Toast";
import TextButton from "subComponents/textButton/TextButton";

// IMPORT OTHERS HERE //
import "./Header.scss";
import cartIcon from "assets/png/cart-24px.png";
import appLogo from "assets/png/app-logo-32px.png";
import jsonServer from "apis/jsonServer";

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
      <main className="header">
        <section className="header--left">
          <Link to="/" className="header__logo-wrapper">
            <img src={appLogo} alt="app-logo" className="header__logo" />
            <div className="header__app-title">Shop Anywhere</div>
          </Link>
          <section className="header__categories">
            <TextButton
              btnText="MEN"
              btnCallback={() => {}}
              hoverCallback={() => {}}
              customBtnClass="header__categories__item"
            />
            <TextButton
              btnText="WOMEN"
              btnCallback={() => {}}
              hoverCallback={() => {}}
              customBtnClass="header__categories__item"
            />
            <TextButton
              btnText="KIDS"
              btnCallback={() => {}}
              hoverCallback={() => {}}
              customBtnClass="header__categories__item"
            />
            <TextButton
              btnText="ACCESSORIES"
              btnCallback={() => {}}
              hoverCallback={() => {}}
              customBtnClass="header__categories__item"
            />
          </section>
        </section>

        <section className="header--right">
          <div className="header__searchbox">
            <SearchBox
              placeholder="Search for products"
              suggestionsCallback={fetchSuggestions}
              suggestions={suggestionsData}
              searchCallback={getProducts}
              keyNames={{ id: "id", name: "name" }}
            />
          </div>
          <div className="header__profile">Profile</div>
          <div className="header__orders">Orders</div>
          <Link to="/cart" className="header__cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartCount} color="secondary">
                <img className="header__cart-img" src={cartIcon} alt="cart" />
              </StyledBadge>
            </IconButton>
            <div className="header__cart-text">Cart</div>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Header;

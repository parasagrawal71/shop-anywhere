import React, { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { toast } from "react-toastify";
import { connect } from "react-redux";

// IMPORT USER-DEFINED COMPONENTS HERE //
import SearchBox from "subComponents/searchBox/SearchBox";
import TextButton from "subComponents/textButton/TextButton";
import { updateToastState as updateToastStateAction } from "redux/actions";

// IMPORT OTHERS HERE //
import "./Header.scss";
import {
  cartIcon24px,
  appLogo32px,
  rightSolidIcon16px,
  downThinIcon16px,
} from "assets/Images";
import { APP_NAME } from "utils/constants";
import jsonServer from "apis/jsonServer";
import headerCategories from "assets/jsons/headerCategories.json"; // TODO: REMOVE THIS LATER

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const cartCount = 2; // TODO: REMOVE THIS LATER

const Header = (props) => {
  const { updateToastState } = props;

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
      updateToastState({ position: "bottom-left" });
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

  const returnCategoriesAndContent = () => {
    return Object.keys(headerCategories).map((majorCat, i) => {
      return (
        <TextButton
          btnText={majorCat}
          onHoverRequired
          customBtnClass="header__categories__item"
          customDropdownClass="header__categories__dropdown"
          key={majorCat + String(i)}
        >
          <section className="header__categories__dropdown-content">
            {Object.values(headerCategories[majorCat]).map((col, j) => {
              return (
                <section
                  className="header__categories__dropdown-column"
                  key={col + String(j)}
                >
                  {Object.keys(col).map((subCol, k) => {
                    return (
                      <div
                        className="header__categories__dropdown-sub-column"
                        key={subCol + String(k)}
                      >
                        <Link
                          to="/"
                          className="header__categories__dropdown-sub-column-header"
                        >
                          {subCol.replace("-", " ")}
                          <img
                            src={rightSolidIcon16px}
                            alt="right-arrow"
                            className="header__categories__dropdown-sub-column-icon"
                          />
                        </Link>
                        <div className="header__categories__dropdown-sub-column-items">
                          {Object.keys(col[subCol]).map((item) => {
                            return (
                              <Link
                                to={`/category/${col[subCol][item].route}`}
                                key={col[subCol][item].route}
                                className="header__categories__dropdown-sub-column-item"
                              >
                                {item.replace("-", " ")}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </section>
              );
            })}
          </section>
        </TextButton>
      );
    });
  };

  const returnProfileIcon = () => {
    return (
      <img
        src={downThinIcon16px}
        alt="down-arrow-thin"
        className="header__profile-down-icon"
      />
    );
  };

  return (
    <>
      <main className="header">
        <section className="header--left">
          <Link to="/" className="header__logo-wrapper">
            <img src={appLogo32px} alt="app-logo" className="header__logo" />
            <div className="header__app-title">{APP_NAME}</div>
          </Link>
          <section className="header__categories">
            {returnCategoriesAndContent()}
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
          <TextButton
            btnText="Profile"
            onHoverRequired
            customBtnClass="header__profile"
            customDropdownClass="header__profile-dropdown"
            iconOnRight={returnProfileIcon()}
          >
            <div className="header__profile-dropdown-content">
              <Link
                to="/profile"
                className="header__profile-dropdown-content-item"
              >
                My Profile
              </Link>
              <Link
                to="/wishlist"
                className="header__profile-dropdown-content-item"
              >
                Wishlist
              </Link>
              <Link to="/" className="header__profile-dropdown-content-item">
                Logout
              </Link>
            </div>
          </TextButton>
          <Link to="/orders" className="header__profile">
            Orders
          </Link>
          <Link to="/cart" className="header__cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartCount} color="secondary">
                <img
                  className="header__cart-img"
                  src={cartIcon24px}
                  alt="cart"
                />
              </StyledBadge>
            </IconButton>
            <div className="header__cart-text">Cart</div>
          </Link>
        </section>
      </main>
    </>
  );
};

export default connect(null, { updateToastState: updateToastStateAction })(
  Header
);

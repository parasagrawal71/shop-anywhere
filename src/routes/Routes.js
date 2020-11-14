import React from "react";
import { Switch } from "react-router-dom";

// IMPORT ALL PAGES HERE //
import HomePage from "pages/homePage/HomePage";
import ProductsListPage from "pages/productListPage/ProductListPage";
import CartPage from "pages/cartPage/CartPage";
import ProductPage from "pages/productPage/ProductPage";
import OrderPage from "pages/orderPage/OrderPage";
import ProfilePage from "pages/profilePage/ProfilePage";
import WishlistPage from "pages/wishlistPage/WishlistPage";

// IMPORT OTHERS HERE //
import Route from "./RouteWrapper";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/category/:category" exact component={ProductsListPage} />
      <Route path="/cart" exact component={CartPage} isPrivate />
      <Route path="/orders" exact component={OrderPage} isPrivate />
      <Route path="/profile" exact component={ProfilePage} isPrivate />
      <Route path="/wishlist" exact component={WishlistPage} isPrivate />
      <Route path="/product" exact component={ProductPage} />
      <Route component={HomePage} />
    </Switch>
  );
};

export default Routes;

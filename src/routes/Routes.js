import React from "react";
import { Switch } from "react-router-dom";

// IMPORT ALL PAGES HERE //
import HomePage from "pages/homePage/HomePage";
import ProductsListPage from "pages/productListPage/ProductListPage";
import CartPage from "pages/cartPage/CartPage";
import ProductPage from "pages/productPage/ProductPage";

import Route from "./RouteWrapper";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/category" exact component={ProductsListPage} />
      <Route path="/cart" exact component={CartPage} isPrivate />
      <Route path="/product" exact component={ProductPage} />
      <Route component={HomePage} />
    </Switch>
  );
};

export default Routes;

import React from "react";
import { Switch } from "react-router-dom";

// IMPORT ALL PAGES HERE //
import Home from "pages/home/Home";
import CategoryItems from "pages/categoryItems/CategoryItems";
import Cart from "pages/cart/Cart";
import Product from "pages/product/Product";

import Route from "./RouteWrapper";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/category" exact component={CategoryItems} />
      <Route path="/cart" exact component={Cart} isPrivate />
      <Route path="/product" exact component={Product} />
      <Route component={Home} />
    </Switch>
  );
};

export default Routes;

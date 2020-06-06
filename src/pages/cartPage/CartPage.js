import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";

// IMPORT STYLES HERE //
import "./CartPage.scss";

const Cart = () => {
  return (
    <div className="cart">
      <Header />
      <div className="cart__content" />
    </div>
  );
};

export default Cart;

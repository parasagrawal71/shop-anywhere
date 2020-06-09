import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";

// IMPORT STYLES HERE //
import "./CartPage.scss";

const CartPage = () => {
  return (
    <div className="cart">
      <Header />
      <section className="cart__content">
        <section className="cart__content--left">
          <div className="cart__content--left-header">My Cart (2)</div>
          <div className="cart__content--left-item">Card Item</div>
        </section>
        <aside className="cart__content--right">ASide</aside>
      </section>
    </div>
  );
};

export default CartPage;

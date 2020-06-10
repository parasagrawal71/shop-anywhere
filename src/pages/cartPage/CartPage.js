import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import CartItemCard from "components/cartItemCard/CartItemCard";
import Button from "subComponents/button/Button";

// IMPORT OTHERS HERE //
import "./CartPage.scss";

const CartPage = () => {
  return (
    <div className="cart">
      <Header />
      <section className="cart__content">
        <section className="cart__content--left">
          <div className="cart__content--left-header">
            <div className="cart__content--left-header-cart">My Cart (2)</div>
            <div className="cart__content--left-header-later">
              Save for Later (3)
            </div>
          </div>
          <div className="cart__content--left-items">
            <CartItemCard />
            <CartItemCard />
            <CartItemCard />
          </div>
        </section>
        <aside className="cart__content__aside">
          <div className="cart__content__aside__header">Price Details</div>
          <div className="cart__content__aside__price">
            <div>Price</div>
            <div>1299</div>
          </div>
          <div className="cart__content__aside__price">
            <div>Delivery Fee</div>
            <div>50</div>
          </div>
          <div className="cart__content__aside__price">
            <div>Total</div>
            <div>1349</div>
          </div>
          <Button
            btnText="Place Order"
            btnColor="white"
            btnWidth="200px"
            btnHeight="40px"
            customContainerClass="cart__content__aside__placeOrder"
            isShadow
          />
        </aside>
      </section>
    </div>
  );
};

export default CartPage;

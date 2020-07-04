import React, { useState } from "react";
import { connect } from "react-redux";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import CartItemCard from "components/cartItemCard/CartItemCard";
import Button from "subComponents/button/Button";
import TextButton from "subComponents/textButton/TextButton";

// IMPORT OTHERS HERE //
import "./CartPage.scss";

const CartPage = (props) => {
  const { myCart, saveLater } = props;

  const [showCartItems, setShowCartItems] = useState(true);

  return (
    <div className="cart">
      <Header />
      <section className="cart__content">
        <section className="cart__content--left">
          <div className="cart__content--left-header">
            <TextButton
              btnText={`My Cart (${myCart.length})`}
              btnCallback={() => setShowCartItems(true)}
              customBtnClass="cart__content--left-header-cart"
              customBtnStyle={
                showCartItems ? { backgroundColor: "lightgrey" } : {}
              }
            />
            <TextButton
              btnText={`Save for Later (${saveLater.length})`}
              btnCallback={() => setShowCartItems(false)}
              customBtnClass="cart__content--left-header-later"
              customBtnStyle={
                showCartItems ? {} : { backgroundColor: "lightgrey" }
              }
            />
          </div>
          {showCartItems ? (
            <div className="cart__content--left-items">
              {myCart.map((cartItem) => {
                return (
                  <CartItemCard
                    cartItem={cartItem}
                    key={cartItem.link}
                    isMyCart
                  />
                );
              })}
            </div>
          ) : (
            <div className="cart__content--left-items">
              {saveLater.map((cartItem) => {
                return (
                  <CartItemCard
                    cartItem={cartItem}
                    key={cartItem.link}
                    isMyCart={false}
                  />
                );
              })}
            </div>
          )}
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

const mapStateToProps = (store) => {
  return { myCart: store.cart.myCart, saveLater: store.cart.saveLater };
};

export default connect(mapStateToProps)(CartPage);

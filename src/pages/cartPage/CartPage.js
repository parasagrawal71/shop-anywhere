import React, { useState, useEffect } from "react";
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
  const [productTotal, setProductTotal] = useState(0);
  const [deliveryTotal, setDeliveryTotal] = useState(0);

  useEffect(() => {
    let productSum = 0;
    let deliverySum = 0;
    if (myCart.length > 1) {
      productSum = myCart.reduce(
        (sum, curr) => sum.offerPrice + curr.offerPrice
      );
      deliverySum = myCart.reduce(
        (sum, curr) => sum.deliveryFee + curr.deliveryFee
      );
    } else if (myCart.length === 1) {
      productSum = myCart[0].offerPrice;
      deliverySum = myCart[0].deliveryFee;
    }
    setProductTotal(productSum);
    setDeliveryTotal(deliverySum);
  }, [myCart]);

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
            <div>{productTotal}</div>
          </div>
          <div className="cart__content__aside__price">
            <div>Delivery Fee</div>
            <div>{deliveryTotal}</div>
          </div>
          <div className="cart__content__aside__price">
            <div>Total</div>
            <div>{productTotal + deliveryTotal}</div>
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

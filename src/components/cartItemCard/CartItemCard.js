import React from "react";
import { connect } from "react-redux";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Button from "subComponents/button/Button";
import { removeFromCart as removeFromCartAction } from "redux/actions";

// IMPORT OTHERS HERE //
import "./CartItemCard.scss";

const CartItemCard = (props) => {
  const { cartItem, removeFromCart } = props;
  const { link, brand, title, actualPrice, offerPrice } = cartItem;

  return (
    <main className="cart-item">
      <div className="cart-item__img">
        <img src={link} alt="cart-item" />
      </div>
      <section className="cart-item__details">
        <div className="cart-item__brandName">{brand}</div>
        <div className="cart-item__productTitle">{title}</div>
        <div className="cart-item__prices">
          <div className="cart-item__prices-offerPrice">
            {`Rs ${offerPrice}`}
          </div>
          <div className="cart-item__prices-actualPrice">{actualPrice}</div>
          <div className="cart-item__prices-discount">
            {`(${(((actualPrice - offerPrice) / actualPrice) * 100).toFixed(
              0
            )} % Off)`}
          </div>
        </div>
        <div className="cart-item__quantity">
          <Button
            btnText="-"
            btnColor="white"
            customContainerClass="cart-item__quantity-btnWrapper"
            customBtnClass="cart-item__quantity-btn"
          />
          <div className="cart-item__quantity">3</div>
          <Button
            btnText="+"
            btnColor="white"
            customContainerClass="cart-item__quantity-btnWrapper"
            customBtnClass="cart-item__quantity-btn"
          />
        </div>
        <Button
          btnText="Save for Later"
          btnColor="white"
          btnWidth="100px"
          btnHeight="30px"
          isShadow
        />
      </section>
      <Button
        btnText="X"
        btnCallback={() => {
          removeFromCart(cartItem);
        }}
        btnColor="white"
        customContainerClass="cart-item__crossWrapper"
        customBtnClass="cart-item__cross"
      />
    </main>
  );
};

export default connect(null, { removeFromCart: removeFromCartAction })(
  CartItemCard
);

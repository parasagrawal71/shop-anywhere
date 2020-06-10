import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Button from "subComponents/button/Button";

// IMPORT STYLES HERE //
import "./CartItemCard.scss";

const brandName = "Peter England";
const productTitle = "Men's Solid Slim fit T-Shirt";
const actualPrice = 999;
const offerPrice = 499;

const CartItemCard = () => {
  return (
    <main className="cart-item">
      <div>
        <img
          src="https://rukminim1.flixcart.com/flap/150/150/image/b616a7aa607d3be0.jpg?q=70"
          alt="cart-item"
        />
      </div>
      <section className="cart-item__details">
        <div className="cart-item__brandName">{brandName}</div>
        <div className="cart-item__productTitle">{productTitle}</div>
        <div className="cart-item__prices">
          <div className="cart-item__prices-offerPrice">
            {`Rs ${offerPrice}`}
          </div>
          <div className="cart-item__prices-actualPrice">{actualPrice}</div>
          <div className="cart-item__prices-discount">
            {`(${((offerPrice / actualPrice) * 100).toFixed(0)} % Off)`}
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
        btnColor="white"
        customContainerClass="cart-item__crossWrapper"
        customBtnClass="cart-item__cross"
      />
    </main>
  );
};

export default CartItemCard;

import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Button from "subComponents/button/Button";

// IMPORT STYLES HERE //
import "./ProductPage.scss";

const brandName = "Peter England";
const productTitle = "Men's Solid Slim fit T-Shirt";
const actualPrice = 999;
const offerPrice = 499;
const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["red", "blue", "grey"];

const ProductPage = () => {
  return (
    <main className="product-page">
      <Header />
      <section className="product-page__content">
        <section className="product-page__content--left">
          <section className="product-page__content--left-top">
            <div className="product-page__content__small-images">
              {[0, 1, 2, 3].map(() => {
                return (
                  <div className="product-page__content__small-image">
                    <img
                      src="https://m.media-amazon.com/images/I/81m+IKu7TUL._AC_UL320_.jpg"
                      alt="product-name"
                    />
                  </div>
                );
              })}
            </div>
            <div className="product-page__content__image">
              <img
                src="https://m.media-amazon.com/images/I/81m+IKu7TUL._AC_UL320_.jpg"
                alt="product-name"
              />
            </div>
          </section>
          <div className="product-page__content--left-bottom">
            <Button
              btnText="Add to Cart"
              btnCallback={() => {}}
              btnColor="white"
              btnTextColor="black"
              btnWidth="49%"
              btnHeight="50px"
              isShadow
            />
            <Button
              btnText="Buy Now"
              btnCallback={() => {}}
              btnColor="white"
              btnTextColor="black"
              btnWidth="49%"
              btnHeight="50px"
              isShadow
            />
          </div>
        </section>
        <section className="product-page__content--right">
          <div className="product-page__content__brandName">{brandName}</div>
          <div className="product-page__content__productTitle">
            {productTitle}
          </div>
          <div className="product-page__content__prices">
            <div className="product-page__content__prices-offerPrice">
              {`Rs ${offerPrice}`}
            </div>
            <div className="product-page__content__prices-actualPrice">
              {actualPrice}
            </div>
            <div className="product-page__content__prices-discount">
              {`(${((offerPrice / actualPrice) * 100).toFixed(0)} % Off)`}
            </div>
          </div>
          <div className="product-page__content__size">
            <div className="product-page__content__size-header">
              Select Size
            </div>
            <div className="product-page__content__size-values">
              {sizes.map((size) => {
                return (
                  <Button
                    btnText={size}
                    btnColor="white"
                    customBtnClass="product-page__content__size-value"
                    customContainerClass="product-page__content__size-value-btnWrapper"
                  />
                );
              })}
            </div>
          </div>
          <div className="product-page__content__color">
            <div className="product-page__content__color-header">
              Select Color
            </div>
            <div className="product-page__content__color-values">
              {colors.map((color) => {
                return (
                  <Button
                    btnText={null}
                    btnColor={color}
                    customBtnClass="product-page__content__color-value"
                    customContainerClass="product-page__content__color-value-btnWrapper"
                  />
                );
              })}
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default ProductPage;

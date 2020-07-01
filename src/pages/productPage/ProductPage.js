import React, { useState } from "react";
import { toast } from "react-toastify";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Button from "subComponents/button/Button";
// import TextInput from "subComponents/textInput/TextInput";
import Toast from "subComponents/toast/Toast";

// IMPORT OTHERS HERE //
import "./ProductPage.scss";

const brandName = "Peter England";
const productTitle = "Men's Solid Slim fit T-Shirt";
const actualPrice = 999;
const offerPrice = 499;
const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["red", "blue", "grey"];
const smallImages = [
  { link: "https://m.media-amazon.com/images/I/81m+IKu7TUL._AC_UL320_.jpg" },
  { link: "https://m.media-amazon.com/images/I/61+MlcjLruL._AC_UL320_.jpg" },
  { link: "https://m.media-amazon.com/images/I/61I1WpwcBqL._AC_UL320_.jpg" },
  { link: "https://m.media-amazon.com/images/I/71p2DUxefbL._AC_UL320_.jpg" },
];

const ProductPage = () => {
  const [smallImageIndex, setSmallImageIndex] = useState(0);
  const [productSize, setProductSize] = useState("");
  const [productColor, setProductColor] = useState("");

  const conditionalStyles = {
    activeSmallImage: {
      borderWidth: 1,
      borderColor: "blue",
    },
    activeSize: {
      borderWidth: 1,
      borderColor: "blue",
    },
    activeColor: {
      borderWidth: 1,
      borderColor: "black",
    },
  };

  const handleAddToCart = () => {
    if (productSize && productColor) {
      toast.info("Added to cart");
      return;
    }
    toast.info("Select size and color to proceed");
  };

  const handleBuyNow = () => {
    if (productSize && productColor) {
      return;
    }
    toast.info("Select size and color to proceed");
  };

  return (
    <main className="product-page">
      <Toast position="bottom-center" />
      <Header />
      <section className="product-page__content">
        <section className="product-page__content--left">
          <section className="product-page__content--left-top">
            <div className="product-page__content__small-images">
              {smallImages.map((smallImage, index) => {
                return (
                  <div
                    role="button"
                    className="product-page__content__small-image"
                    style={
                      smallImageIndex === index
                        ? conditionalStyles.activeSmallImage
                        : {}
                    }
                    onClick={() => setSmallImageIndex(index)}
                    onKeyDown={() => {}}
                    tabIndex="0"
                  >
                    <img src={smallImage.link} alt="product-name" />
                  </div>
                );
              })}
            </div>
            <div className="product-page__content__image">
              <img src={smallImages[smallImageIndex].link} alt="product-name" />
            </div>
          </section>
          <div className="product-page__content--left-bottom">
            <Button
              btnText="Add to Cart"
              btnCallback={handleAddToCart}
              btnColor="white"
              btnTextColor="black"
              btnWidth="49%"
              btnHeight="50px"
              customContainerClass="product-page__content--left-bottom-btn"
              isShadow
            />
            <Button
              btnText="Buy Now"
              btnCallback={handleBuyNow}
              btnColor="white"
              btnTextColor="black"
              btnWidth="49%"
              btnHeight="50px"
              customContainerClass="product-page__content--left-bottom-btn"
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
                    btnCallback={() => setProductSize(size)}
                    btnColor="white"
                    customBtnClass="product-page__content__size-value"
                    customContainerClass="product-page__content__size-value-btnWrapper"
                    customBtnStyle={
                      productSize === size ? conditionalStyles.activeSize : {}
                    }
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
                    btnCallback={() => setProductColor(color)}
                    btnColor={color}
                    customBtnClass="product-page__content__color-value"
                    customContainerClass="product-page__content__color-value-btnWrapper"
                    customBtnStyle={
                      productColor === color
                        ? conditionalStyles.activeColor
                        : {}
                    }
                  />
                );
              })}
            </div>
          </div>
          {/* <div className="product-page__content__delivery">
            <div className="product-page__content__delivery-header">
              Delivery Options
            </div>
            <TextInput
              label="Enter Pincode"
              customContainerClass="product-page__content__delivery-input-wrapper"
              customFieldClass="product-page__content__delivery-input"
            />
          </div> */}
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default ProductPage;

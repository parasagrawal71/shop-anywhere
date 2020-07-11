import React, { useState } from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Button from "subComponents/button/Button";
// import TextInput from "subComponents/textInput/TextInput";
import history from "routes/history";
import { updateToastState as updateToastStateAction } from "redux/actions/toastActions";
import { addToCart as addToCartAction } from "redux/actions/cartActions";

// IMPORT OTHERS HERE //
import "./ProductPage.scss";

const product = {
  link: "https://m.media-amazon.com/images/I/81m+IKu7TUL._AC_UL320_.jpg",
  brand: "Elements by Peter England",
  title: "Men's T-Shirt",
  actualPrice: 2013,
  offerPrice: 545,
  category: "accessories-backpacks",
  itemCount: 1,
  deliveryFee: 50,
};
const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["red", "blue", "grey"];
const smallImages = [
  { link: "https://m.media-amazon.com/images/I/81m+IKu7TUL._AC_UL320_.jpg" },
  { link: "https://m.media-amazon.com/images/I/61+MlcjLruL._AC_UL320_.jpg" },
  { link: "https://m.media-amazon.com/images/I/61I1WpwcBqL._AC_UL320_.jpg" },
  { link: "https://m.media-amazon.com/images/I/71p2DUxefbL._AC_UL320_.jpg" },
];

const ProductPage = (props) => {
  const { updateToastState, addToCart } = props;
  const { brand, title, actualPrice, offerPrice } = product;

  // STATE VARIABLES
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
      updateToastState({ position: "bottom-right", autoCloseTime: 1500 });
      addToCart(product);
      toast.info("Added to cart");
      history.push("/cart");
      return;
    }
    updateToastState({ position: "bottom-right" });
    toast.info("Select size and color to proceed");
    toast.clearWaitingQueue();
  };

  const handleBuyNow = () => {
    updateToastState({ position: "bottom-right" });
    if (productSize && productColor) {
      return;
    }
    toast.info("Select size and color to proceed");
    toast.clearWaitingQueue();
  };

  return (
    <main className="product-page">
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
          <div className="product-page__content__brandName">{brand}</div>
          <div className="product-page__content__productTitle">{title}</div>
          <div className="product-page__content__prices">
            <div className="product-page__content__prices-offerPrice">
              {`Rs ${offerPrice}`}
            </div>
            <div className="product-page__content__prices-actualPrice">
              {actualPrice}
            </div>
            <div className="product-page__content__prices-discount">
              {`(${(((actualPrice - offerPrice) / actualPrice) * 100).toFixed(
                0
              )} % Off)`}
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

export default connect(null, {
  updateToastState: updateToastStateAction,
  addToCart: addToCartAction,
})(ProductPage);

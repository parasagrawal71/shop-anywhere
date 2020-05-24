import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";

// IMPORT STYLES HERE //
import "./Product.scss";

const Product = () => {
  return (
    <div className="product">
      <Header />
      <div className="product__content" />
    </div>
  );
};

export default Product;

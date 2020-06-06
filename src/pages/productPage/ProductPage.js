import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import Footer from "components/footer/Footer";

// IMPORT STYLES HERE //
import "./ProductPage.scss";

const ProductPage = () => {
  return (
    <div className="product">
      <Header />
      <div className="product__content" />
      <Footer />
    </div>
  );
};

export default ProductPage;

import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import Footer from "components/footer/Footer";

// IMPORT STYLES HERE //
import "./ProductPage.scss";

const ProductPage = () => {
  return (
    <div className="product-page">
      <Header />
      <div className="product-page__content flex-row">
        <div className="product-page__content--left">
          <div className="product-page__content-image flex-col-b-start-cen">
            <img
              src="https://m.media-amazon.com/images/I/81m+IKu7TUL._AC_UL320_.jpg"
              alt="product-name"
            />
          </div>
        </div>
        <div className="product-page__content--right">
          <div>DEtails</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;

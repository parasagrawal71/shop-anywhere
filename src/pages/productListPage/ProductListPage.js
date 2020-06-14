import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import FilterBox from "components/filterBox/FilterBox";
import ProductCard from "components/productCard/ProductCard";
import Footer from "components/footer/Footer";

// IMPORT OTHERS HERE //
import "./ProductListPage.scss";

const ProductListPage = () => {
  const returnVisitedCategoryItems = () => {
    // eslint-disable-next-line global-require
    return require("assets/jsons/tshirtsImages.json");
  };

  return (
    <div className="product-list">
      <Header />
      <div className="product-list__content">
        <div className="product-list__content--left">
          <FilterBox />
        </div>
        <div className="product-list__content--right">
          {returnVisitedCategoryItems().map((image) => {
            return (
              <ProductCard
                imgSrc={image.link}
                imageTitle={image.title}
                actualPrice={image.actualPrice}
                offerPrice={image.offerPrice}
                brandName={image.brand}
                key={image.link}
                numOfItemsInALine={4}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListPage;

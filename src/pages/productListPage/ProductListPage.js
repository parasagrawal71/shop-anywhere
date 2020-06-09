import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import FilterBox from "components/filterBox/FilterBox";
import ProductCard from "components/productCard/ProductCard";
import Footer from "components/footer/Footer";

// IMPORT STYLES HERE //
import "./ProductListPage.scss";

// IMPORT ASSETS HERE //
import tshirtsImages from "assets/jsons/tshirtsImages.json"; // TODO: REMOVE THIS LATER

const ProductListPage = () => {
  return (
    <div className="product-list">
      <Header />
      <div className="product-list__content">
        <div className="product-list__content--left">
          <FilterBox />
        </div>
        <div className="product-list__content--right">
          {tshirtsImages.map((image) => {
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

import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import FilterBox from "components/filterBox/FilterBox";
import ProductCard from "components/productCard/ProductCard";
import Footer from "components/footer/Footer";

// IMPORT STYLES HERE //
import "./ProductsListPage.scss";

// IMPORT ASSETS HERE //
import tshirtsImages from "assets/jsons/tshirtsImages.json"; // REMOVE THIS LATER

const ProductsListPage = () => {
  return (
    <div className="products-list">
      <Header />
      <div className="products-list__content flex-row">
        <div className="products-list__content--left">
          <FilterBox />
        </div>
        <div className="products-list__content--right flex-row">
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

export default ProductsListPage;

import React, { useEffect } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import FilterBox from "components/filterBox/FilterBox";
import ProductCard from "components/productCard/ProductCard";
import Footer from "components/footer/Footer";
import Breadcrumb from "subComponents/breadcrumb/Breadcrumb";

// IMPORT OTHERS HERE //
import "./ProductListPage.scss";

const BreadcrumbData = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "men-tshirts",
    label: "Men",
  },
  {
    path: "men-tshirts",
    label: "Top Wear",
  },
  {
    path: "men-tshirts",
    label: "Tshirts",
  },
];

const ProductListPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const returnVisitedCategoryItems = () => {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const categoryItems = require(`assets/jsons/categories/${props.match.params.category}.json`);
    return categoryItems;
  };

  return (
    <div className="product-list">
      <Header />
      <div className="product-list__content">
        <div className="product-list__content--left">
          <FilterBox />
        </div>
        <div className="product-list__content--right">
          <div className="product-list__content__header">
            <div className="product-list__content__breadcrumb">
              <Breadcrumb BreadcrumbData={BreadcrumbData} />
            </div>
            <div className="product-list__content__sortby">Sort By</div>
          </div>
          <div className="product-list__content__products">
            {returnVisitedCategoryItems().map((image) => {
              return (
                <ProductCard
                  imgSrc={image.link}
                  imageTitle={image.title}
                  actualPrice={image.actualPrice}
                  offerPrice={image.offerPrice}
                  brandName={image.brand}
                  key={image.category}
                  numOfItemsInALine={4}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListPage;

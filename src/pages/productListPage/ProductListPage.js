import React, { useState, useEffect } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import FilterBox from "components/filterBox/FilterBox";
import ProductCard from "components/productCard/ProductCard";
import Footer from "components/footer/Footer";
import Breadcrumb from "subComponents/breadcrumb/Breadcrumb";
import TextButton from "subComponents/textButton/TextButton";
import Pagination from "subComponents/pagination/Pagination";

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
  const PER_PAGE = 20;
  const [dataDetails, setDataDetails] = useState({});
  const [currData, setCurrData] = useState([]);
  const [offset, setOffset] = useState(0);

  const returnVisitedCategoryItems = () => {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const categoryItems = require(`assets/jsons/categories/${props.match.params.category}.json`);
    return categoryItems;
  };

  useEffect(() => {
    const data = returnVisitedCategoryItems();
    setDataDetails({ ...currData, totalCount: data.length, data });
    setCurrData([...data.slice(0, 20)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (dataDetails && dataDetails.data) {
      setCurrData([...dataDetails.data.slice(0 + offset, PER_PAGE + offset)]);
    }
  }, [offset, dataDetails]);

  return (
    <div className="product-list">
      <Header />
      <div className="product-list__content">
        <div className="product-list__content--left">
          <FilterBox />
        </div>
        <div className="product-list__content--right">
          <div className="product-list__content__header">
            <Breadcrumb BreadcrumbData={BreadcrumbData} />
            <div className="product-list__content__productTitle">
              Men&#39;s Tshirts
            </div>
            <div className="product-list__content__sortby">
              <div className="product-list__content__sortby-item">Sort By</div>
              <TextButton
                btnText="Discount"
                btnCallback={() => {}}
                customBtnClass="product-list__content__sortby-item activeClass"
              />
              <TextButton
                btnText="Low to High"
                btnCallback={() => {}}
                customBtnClass="product-list__content__sortby-item"
              />
              <TextButton
                btnText="High to Low"
                btnCallback={() => {}}
                customBtnClass="product-list__content__sortby-item"
              />
            </div>
          </div>
          <div className="product-list__content__products">
            {currData.map((image) => {
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
          <div className="product-list__content__footer">
            <Pagination
              totalItems={dataDetails.totalCount}
              perPage={PER_PAGE}
              setOffset={setOffset}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListPage;

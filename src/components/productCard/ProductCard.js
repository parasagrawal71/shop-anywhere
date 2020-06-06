import React from "react";
import { Link } from "react-router-dom";

// IMPORT STYLES HERE //
import "./ProductCard.scss";

const ProductCard = (props) => {
  const {
    imgSrc,
    imageTitle,
    actualPrice,
    offerPrice,
    brandName,
    numOfItemsInALine,
  } = props;

  const calculateWidth = () => {
    return `${100 / numOfItemsInALine}%`;
  };

  return (
    <Link
      to="/product"
      className="product-card flex-col-b-sb-cen"
      style={{ width: calculateWidth() }}
    >
      <div className="product-card__img flex-col-cen">
        <img src={imgSrc} alt={imageTitle} />
      </div>
      <div className="product-card--bottom flex-col-h-cen">
        <div className="product-card__title">{imageTitle}</div>
        <div className="product-card__brandname">{brandName}</div>
        <div className="product-card__price flex-row">
          <div className="product-card__price-offer">{`Rs ${offerPrice}`}</div>
          <div className="product-card__price-actual">{`Rs ${actualPrice}`}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

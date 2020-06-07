import React from "react";
import { CLIENT_URL } from "utils/constants/clientUrl";

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

  // CONSTANTS

  // METHODS
  const calculateWidth = () => {
    return `${100 / numOfItemsInALine}%`;
  };

  return (
    <a
      href={`${CLIENT_URL}/product`}
      target="_blank"
      rel="noopener noreferrer"
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
    </a>
  );
};

export default ProductCard;

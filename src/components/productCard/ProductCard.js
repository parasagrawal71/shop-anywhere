import React from "react";

// IMPORT OTHERS HERE //
import "./ProductCard.scss";
import { CLIENT_URL } from "utils/constants/urls";

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
      className="product-card"
      style={{ width: calculateWidth() }}
    >
      <div className="product-card__img">
        <img src={imgSrc} alt={imageTitle} />
      </div>
      <div className="product-card--bottom">
        <div className="product-card__title">{imageTitle}</div>
        <div className="product-card__brandname">{brandName}</div>
        <div className="product-card__price">
          <div className="product-card__price-offer">{`Rs ${offerPrice}`}</div>
          <div className="product-card__price-actual">{`Rs ${actualPrice}`}</div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;

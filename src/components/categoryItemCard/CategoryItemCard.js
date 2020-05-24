import React from "react";
import { Link } from "react-router-dom";

// IMPORT STYLES HERE //
import "./CategoryItemCard.scss";

const CategoryItemCard = (props) => {
  const { imageTitle, offValue, imgSrc } = props;
  return (
    <Link to="/product" className="category-itemcard flex-col-h-cen">
      <div className="category-itemcard__img">
        <img src={imgSrc} alt={imageTitle} />
      </div>
      <div className="category-itemcard__title">{imageTitle}</div>
      <div className="category-itemcard__off">{offValue}</div>
    </Link>
  );
};

export default CategoryItemCard;

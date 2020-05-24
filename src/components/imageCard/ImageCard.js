import React from "react";
import { Link } from "react-router-dom";

// IMPORT STYLES HERE //
import "./ImageCard.css";

const ImageCard = (props) => {
  const { imageTitle, offValue, imgSrc } = props;
  return (
    <Link to="/category" className="imagecard flex-col-h-cen">
      <div className="imagecard__img">
        <img src={imgSrc} alt={imageTitle} />
      </div>
      <div className="imagecard__title">{imageTitle}</div>
      <div className="imagecard__off">{offValue}</div>
    </Link>
  );
};

export default ImageCard;

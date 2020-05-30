import React from "react";
import { Link } from "react-router-dom";

// IMPORT STYLES HERE //
import "./ImageCard.scss";

const ImageCard = (props) => {
  const { imageTitle, secondTitle, thirdTitle, imgSrc } = props;
  return (
    <Link to="/category" className="imagecard flex-col-h-cen">
      <div className="imagecard__img">
        <img src={imgSrc} alt={imageTitle} />
      </div>
      <div className="imagecard__title">{imageTitle}</div>
      <div className="imagecard__second-title">{secondTitle}</div>
      <div className="imagecard__third-title">{thirdTitle}</div>
    </Link>
  );
};

export default ImageCard;

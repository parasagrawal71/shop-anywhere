import React from "react";
import { Link } from "react-router-dom";

// IMPORT STYLES HERE //
import "./ImageCard.scss";

const ImageCard = (props) => {
  const {
    imageTitle,
    secondTitle,
    thirdTitle,
    imgSrc,
    numOfItemsInALine,
  } = props;

  const calculateWidth = () => {
    return `${100 / numOfItemsInALine}%`;
  };

  return (
    <Link
      to="/category"
      className="imagecard"
      style={{ width: calculateWidth() }}
    >
      <div className="imagecard__img">
        <img src={imgSrc} alt={imageTitle} />
      </div>
      <div className="imagecard--bottom">
        <div className="imagecard__title">{imageTitle}</div>
        <div className="imagecard__second-title">{secondTitle}</div>
        <div className="imagecard__third-title">{thirdTitle}</div>
      </div>
    </Link>
  );
};

export default ImageCard;

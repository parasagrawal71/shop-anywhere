import React from "react";

// IMPORT STYLES HERE //
import "./ImageCard.css";

const ImageCard = (props) => {
  const { imageTitle, offValue, imgSrc } = props;
  return (
    <div className="imagecard flex-col-h-cen">
      <div className="imagecard__img">
        <img src={imgSrc} alt={imageTitle} />
      </div>
      <div className="imagecard__title">{imageTitle}</div>
      <div className="imagecard__off">{offValue}</div>
    </div>
  );
};

export default ImageCard;

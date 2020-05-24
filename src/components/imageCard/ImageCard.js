import React from "react";

// IMPORT STYLES HERE //
import "./ImageCard.css";

const ImageCard = (props) => {
  const { imageTitle, offValue, imgSrc } = props;
  return (
    <div
      role="button"
      className="imagecard flex-col-h-cen"
      onClick={() => {}}
      onKeyDown={() => {}}
      tabIndex="0"
    >
      <div className="imagecard__img">
        <img src={imgSrc} alt={imageTitle} />
      </div>
      <div className="imagecard__title">{imageTitle}</div>
      <div className="imagecard__off">{offValue}</div>
    </div>
  );
};

export default ImageCard;

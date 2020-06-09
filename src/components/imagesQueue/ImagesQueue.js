import React, { useState } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Button from "subComponents/button/Button";
import ImageCard from "components/imageCard/ImageCard";

// IMPORT STYLES HERE //
import "./ImagesQueue.scss";

// IMPORT ASSETS HERE //
import nextIcon from "assets/png/next-32px.png";
import prevIcon from "assets/png/prev-32px.png";

// Variables
const MAX_IMAGES_IN_ROW = 7;

const ImagesQueue = (props) => {
  // PROPS
  const { headerText, headerSubText, imagesData } = props;

  // STATE VARIABLES
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(MAX_IMAGES_IN_ROW);

  // METHODS
  const showNextImages = () => {
    if (end < imagesData.length - MAX_IMAGES_IN_ROW) {
      setStart(start + MAX_IMAGES_IN_ROW);
      setEnd(end + MAX_IMAGES_IN_ROW);
    } else if (end < imagesData.length) {
      setStart(imagesData.length - MAX_IMAGES_IN_ROW);
      setEnd(imagesData.length);
    }
  };

  const showPrevImages = () => {
    if (start > MAX_IMAGES_IN_ROW) {
      setStart(start - MAX_IMAGES_IN_ROW);
      setEnd(end - MAX_IMAGES_IN_ROW);
    } else if (start > 0) {
      setStart(0);
      setEnd(MAX_IMAGES_IN_ROW);
    }
  };

  return (
    <div className="images-queue">
      <div className="images-queue__header">
        <div className="images-queue__header--left">
          <div className="images-queue__header-text">{headerText}</div>
          <div className="images-queue__header-subtext">{headerSubText}</div>
        </div>
        <div className="images-queue__header--right">
          <Button
            btnText="view all"
            btnCallback={() => {}}
            btnColor="#2874f0"
            btnTextColor="white"
            isShadow
          />
        </div>
      </div>
      <div className="images-queue__content">
        {start !== 0 ? (
          <div
            role="button"
            className="images-queue__prev"
            onClick={showPrevImages}
            onKeyDown={() => {}}
            tabIndex="0"
          >
            <img src={prevIcon} alt="prev-large" />
          </div>
        ) : null}
        {imagesData.slice(start, end).map((image) => {
          return (
            <ImageCard
              imageTitle={image.title}
              imgSrc={image.link}
              secondTitle={image.off}
              thirdTitle={image.subTitle}
              key={image.link}
              numOfItemsInALine={MAX_IMAGES_IN_ROW}
            />
          );
        })}
        {end < imagesData.length ? (
          <div
            role="button"
            className="images-queue__next"
            onClick={showNextImages}
            onKeyDown={() => {}}
            tabIndex="0"
          >
            <img src={nextIcon} alt="next-large" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ImagesQueue;

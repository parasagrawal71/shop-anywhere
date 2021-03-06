import React, { useState } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Button from "subComponents/button/Button";
import ImageCard from "components/imageCard/ImageCard";

// IMPORT OTHERS HERE //
import "./ImagesQueue.scss";
import { nextIcon32px, prevIcon32px } from "assets/Images";

// VARIABLES
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
        <Button
          btnText="view all"
          btnCallback={() => {}}
          btnColor="#2874f0"
          btnTextColor="white"
          isShadow
          customContainerClass="images-queue__header--right"
        />
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
            <img src={prevIcon32px} alt="prev-large" />
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
              route={image.category}
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
            <img src={nextIcon32px} alt="next-large" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ImagesQueue;

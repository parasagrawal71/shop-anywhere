import React, { useState } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Button from "subComponents/button/Button";
import ImageCard from "components/imageCard/ImageCard";

// IMPORT STYLES HERE //
import "./ImagesQueue.css";
import "utils/commonStyles/flex.css";

// IMPORT ASSETS HERE //
import nextIcon from "assets/png/next-large.png";
import prevIcon from "assets/png/prev-large.png";

// Variables
const MAX_IMAGES_IN_ROW = 6;

const ImagesQueue = (props) => {
  // PROPS
  const { headerText, headerSubText, imagesData } = props;

  // STATE VARIABLES
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);

  // METHODS
  const showNextImages = () => {
    if (end < imagesData.length) {
      setStart(start + MAX_IMAGES_IN_ROW);
      setEnd(end + MAX_IMAGES_IN_ROW);
    }
  };

  const showPrevImages = () => {
    if (start > 0) {
      setStart(start - MAX_IMAGES_IN_ROW);
      setEnd(end - MAX_IMAGES_IN_ROW);
    }
  };

  const openItemInNextPage = (e) => {
    // eslint-disable-next-line no-console
    console.log(e.target);
  };

  return (
    <div className="images-queue">
      <div className="images-queue__header flex-row-b-sb-cen">
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
          />
        </div>
      </div>
      <div
        className="images-queue__content flex-row"
        role="button"
        onKeyDown={() => {}}
        tabIndex="0"
        onClick={openItemInNextPage}
      >
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
        {imagesData.slice(start, end).map((image, index) => {
          return (
            <ImageCard
              imageTitle={image.title}
              imgSrc={image.src}
              offValue={image.off}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
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

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// IMPORT STYLES HERE //
import "./Carousel.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselComponent = (props) => {
  const { deviceType, slidesImages, autoPlaySpeed } = props;

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots
      responsive={responsive}
      // ssr={true} // means to render carousel on server-side.
      infinite
      autoPlay={deviceType !== "mobile"}
      autoPlaySpeed={autoPlaySpeed}
      keyBoardControl
      customTransition="transform .5s ease 0s"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {slidesImages.map((item) => {
        return (
          <img
            src={item.link}
            alt={item.link}
            key={item.link}
            className="carousel__image"
          />
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;

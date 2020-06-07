import React from "react";
import Carousel from "react-material-ui-carousel";

// IMPORT STYLES HERE //
import "./Carousel.scss";

const items = [
  {
    link:
      "https://rukminim1.flixcart.com/flap/1688/280/image/7b8e5d1df0df2689.jpg?q=50",
  },
  {
    link:
      "https://rukminim1.flixcart.com/flap/1688/280/image/c04a14edaeb8e306.jpg?q=50",
  },
  {
    link:
      "https://rukminim1.flixcart.com/flap/1688/280/image/3393f0140d6405fe.jpg?q=50",
  },
];

const CarouselComponent = () => {
  return (
    <Carousel
      animation="slide"
      navButtonsAlwaysVisible
      interval={3000}
      timeout={1000}
      className="carousel-component"
    >
      {items.map((item) => {
        return <img src={item.link} alt={item.link} />;
      })}
    </Carousel>
  );
};

export default CarouselComponent;

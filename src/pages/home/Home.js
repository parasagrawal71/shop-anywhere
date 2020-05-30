import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import ImagesQueue from "components/imagesQueue/ImagesQueue";
import Footer from "components/footer/Footer";

// IMPORT STYLES HERE //
import "./Home.scss";

// IMPORT ASSETS HERE //
import headphone from "assets/jpg/headphone.jpg"; // REMOVE THIS LATER

// REMOVE THIS LATER
const offersImages = [
  { src: headphone, title: "headphone 1", off: "min 20% off", link: "" },
  {
    src:
      "https://rukminim1.flixcart.com/image/150/150/k70spzk0/trouser/h/k/u/30-hltr003959-highlander-original-imafpchqmyqyxf8h.jpeg?q=70",
    title: "men trousers",
    off: "upto 40% off",
    link: "",
  },
  { src: headphone, title: "headphone 3", off: "upto 50% off", link: "" },
  { src: headphone, title: "headphone 4", off: "min 30% off", link: "" },
  { src: headphone, title: "headphone 5", off: "min 40% off", link: "" },
  { src: headphone, title: "headphone 6", off: "upto 60% off", link: "" },
  { src: headphone, title: "headphone 7", off: "min 20% off", link: "" },
  { src: headphone, title: "headphone 8", off: "min 30% off", link: "" },
  { src: headphone, title: "headphone 9", off: "upto 50% off", link: "" },
  { src: headphone, title: "headphone 10", off: "min 30% off", link: "" },
  { src: headphone, title: "headphone 11", off: "min 40% off", link: "" },
  { src: headphone, title: "headphone 12", off: "upto 60% off", link: "" },
  { src: headphone, title: "headphone 13", off: "min 20% off", link: "" },
  { src: headphone, title: "headphone 14", off: "min 20% off", link: "" },
  { src: headphone, title: "headphone 15", off: "min 30% off", link: "" },
];

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__content">
        <div className="home__images-queue">
          <ImagesQueue
            headerText="offers"
            headerSubText="suggested for you"
            imagesData={offersImages}
          />
        </div>
        <div className="home__images-queue">
          <ImagesQueue
            headerText="Categories"
            headerSubText="suggested for you"
            imagesData={offersImages}
          />
        </div>
        <div className="home__images-queue">
          <ImagesQueue
            headerText="Recommendations"
            headerSubText="suggested for you"
            imagesData={offersImages}
          />
        </div>
        <div className="home__images-queue">
          <ImagesQueue
            headerText="Recently Viewed"
            headerSubText="suggested for you"
            imagesData={offersImages}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

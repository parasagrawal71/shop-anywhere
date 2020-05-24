import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import ImagesQueue from "components/imagesQueue/ImagesQueue";
import Footer from "components/footer/Footer";

// IMPORT STYLES HERE //
import "./Home.css";

// IMPORT ASSETS HERE //
import headphone from "assets/jpg/headphone.jpg"; // REMOVE THIS LATER

// REMOVE THIS LATER
const offersImages = [
  { src: headphone, title: "headphone", off: "min 20% off", link: "" },
  { src: headphone, title: "headphone", off: "upto 40% off", link: "" },
  { src: headphone, title: "headphone", off: "upto 50% off", link: "" },
  { src: headphone, title: "headphone", off: "min 30% off", link: "" },
  { src: headphone, title: "headphone", off: "min 40% off", link: "" },
  { src: headphone, title: "headphone", off: "upto 60% off", link: "" },
  { src: headphone, title: "headphone", off: "min 20% off", link: "" },
  { src: headphone, title: "headphone", off: "min 30% off", link: "" },
  { src: headphone, title: "headphone", off: "upto 50% off", link: "" },
  { src: headphone, title: "headphone", off: "min 30% off", link: "" },
  { src: headphone, title: "headphone", off: "min 40% off", link: "" },
  { src: headphone, title: "headphone", off: "upto 60% off", link: "" },
  { src: headphone, title: "headphone", off: "min 20% off", link: "" },
  { src: headphone, title: "headphone", off: "min 20% off", link: "" },
  { src: headphone, title: "headphone", off: "min 30% off", link: "" },
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

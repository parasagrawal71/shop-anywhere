import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import ImagesQueue from "components/imagesQueue/ImagesQueue";
import Footer from "components/footer/Footer";
import Carousel from "subComponents/carousel/Carousel";

// IMPORT STYLES HERE //
import "./HomePage.scss";

// IMPORT ASSETS HERE //
import offersImages from "assets/jsons/offersImages.json"; // REMOVE THIS LATER

const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__content">
        <Carousel />
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

export default HomePage;

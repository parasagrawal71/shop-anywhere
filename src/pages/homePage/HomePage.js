import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import ImagesQueue from "components/imagesQueue/ImagesQueue";
import Footer from "components/footer/Footer";
import Carousel from "subComponents/carousel/Carousel";

// IMPORT OTHERS HERE //
import "./HomePage.scss";
import offersImages from "assets/jsons/offersImages.json"; // TODO: REMOVE THIS LATER
import slidesImages from "assets/jsons/slidesImages.json"; // TODO: REMOVE THIS LATER

const HomePage = () => {
  return (
    <div className="home">
      <Header />
      {/* <div className="home__temp-msg">This website is not completed yet</div> */}
      <div className="home__content">
        <div className="home__carousel">
          <Carousel slidesImages={slidesImages.items2} autoPlaySpeed={2500} />
        </div>
        <div className="home__images-queue">
          <ImagesQueue
            headerText="offers"
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
            headerText="You may like"
            headerSubText="suggested for you"
            imagesData={offersImages}
          />
        </div>
        <div className="home__images-queue">
          <ImagesQueue headerText="Recently Viewed" headerSubText="" imagesData={offersImages} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

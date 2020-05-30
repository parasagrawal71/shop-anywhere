import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import ImagesQueue from "components/imagesQueue/ImagesQueue";
import Footer from "components/footer/Footer";

// IMPORT STYLES HERE //
import "./Home.scss";

// IMPORT ASSETS HERE //
import offersImages from "assets/jsons/offersImages.json"; // REMOVE THIS LATER

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

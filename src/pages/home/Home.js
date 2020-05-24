import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import ImagesQueue from "components/imagesQueue/ImagesQueue";

// IMPORT STYLES HERE //
import "./Home.css";

// IMPORT ASSETS HERE //
import headphone from "assets/jpg/headphone.jpg"; // REMOVE THIS LATER

// REMOVE THIS LATER
const imagesData = [
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
        <ImagesQueue
          headerText="offers"
          headerSubText="suggested for you"
          imagesData={imagesData}
        />
      </div>
    </div>
  );
};

export default Home;

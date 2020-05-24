import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import FilterBar from "components/filterBar/FilterBar";
import CategoryItemCard from "components/categoryItemCard/CategoryItemCard";

// IMPORT STYLES HERE //
import "./CategoryItems.scss";

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

const CategoryItems = () => {
  return (
    <div className="category-items">
      <Header />
      <div className="category-items__content flex-row">
        <div className="category-items__content--left">
          <FilterBar />
        </div>
        <div className="category-items__content--right flex-row">
          {offersImages.map((image, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div className="category-items__card" key={index}>
                <CategoryItemCard
                  imageTitle={image.title}
                  imgSrc={image.src}
                  offValue={image.off}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  campingImages,
  hillsImages,
  paraGlidingImages,
  treakingImages,
} from "../../../data/workPageData";
import WorkCard from "./WorkCard";

function WorkGallery(props) {
  const workImages = [
    campingImages,
    treakingImages,
    paraGlidingImages,
    hillsImages,
  ];

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="16px">
        {workImages[props.activeTab].map(function (img, index) {
          return <WorkCard key={index} img={img} />;
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default WorkGallery;

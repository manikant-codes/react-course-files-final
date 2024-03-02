import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GalleryCard from "./GalleryCard";
import {
  camerasImages,
  headphonesImages,
  laptopsImages,
  mobilesImages,
} from "../../../data/productsPageData";

function ProductsGallery(props) {
  const { activeTab } = props;
  const products = [
    laptopsImages,
    mobilesImages,
    camerasImages,
    headphonesImages,
  ];

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="16px">
        {products[activeTab].map(function (img, index) {
          return (
            <GalleryCard src={img.src} title={img.title} desc={img.desc} />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ProductsGallery;

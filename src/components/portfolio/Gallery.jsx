import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "../../styles/portfolio/gallery.module.css";
import { imagesList } from "../../data/portfolio";

function Gallery(props) {
  const { activeTab } = props;
  return (
    <div className={styles.galleryContainer}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="16px">
          {imagesList[activeTab].map((value) => {
            return <img key={value.id} src={value.url} alt="" className={styles.image} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Gallery;

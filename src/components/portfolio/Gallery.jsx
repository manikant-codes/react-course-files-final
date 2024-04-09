import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "../../styles/portfolio/gallery.module.css";
import { softwareDevelopmentImages } from "../../data/portfolio";

function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="16px">
          {softwareDevelopmentImages.map((value) => {
            return <img key={value.id} src={value.url} alt="" />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Gallery;

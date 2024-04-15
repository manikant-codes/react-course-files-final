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
            return (
              <div style={{ height: "300px", overflow: "hidden" }}>
                {value.isVideo ? (
                  <video
                    src="./images/video.mp4"
                    autoPlay={true}
                    controls={true}
                    muted={true}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "16px",
                    }}
                  ></video>
                ) : (
                  <img
                    key={value.id}
                    src={value.url}
                    alt=""
                    className={styles.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Gallery;

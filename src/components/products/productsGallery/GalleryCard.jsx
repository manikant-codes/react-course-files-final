import React from "react";
import styles from "../../../styles/products/productsGallery.module.css";

function GalleryCard(props) {
  return (
    <div className={styles.galleryCardContainer}>
      <img src={props.src} alt="" className={styles.galleryCardImg} />
      <div className={styles.galleryCardDescContainer}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default GalleryCard;

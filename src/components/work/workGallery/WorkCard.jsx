import React from "react";
import styles from "../../../styles/work/workGallery.module.css";

function WorkCard(props) {
  const { src, title, desc } = props.img;
  return (
    <div className={styles.workCardContainer}>
      <img src={src} alt={title} className={styles.workCardImg} />
      <div className={styles.workCardTitleContainer}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default WorkCard;

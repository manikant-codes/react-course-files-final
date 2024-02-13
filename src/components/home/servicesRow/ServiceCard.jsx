import React from "react";
import styles from "../../../styles/home/servicesRow.module.css";

function ServiceCard(props) {
  return (
    <div className={styles.serviceCardContainer}>
      <div className={styles.serviceCardImgContainer}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.serviceCardDescContainer}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button>Explore</button>
      </div>
    </div>
  );
}

export default ServiceCard;

import React from "react";
import styles from "../../../styles/home/servicesRow.module.css";

function ServiceCard(props) {
  return (
    <div className={styles.serviceCardContainer}>
      <div className={styles.serviceCardImgContainer}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.serviceCardDescContainer}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <button>Know More</button>
      </div>
    </div>
  );
}

export default ServiceCard;

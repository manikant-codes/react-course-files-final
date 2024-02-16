import React from "react";
import styles from "../../../styles/home/infoRow.module.css";

function InfoRow(props) {
  return (
    <>
      {props.contentFirst ? (
        <div className={styles.outerContainer}>
          <div className={styles.descContainerCF}>
            {props.customComponent ? (
              props.customComponent
            ) : (
              <>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <button>Know More</button>
              </>
            )}
          </div>
          <div className={styles.imgContainerCF}>
            <img src={props.src} alt={props.title} />
          </div>
        </div>
      ) : (
        <div className={styles.outerContainer}>
          <div className={styles.imgContainer}>
            <img src={props.src} alt={props.title} />
          </div>
          <div className={styles.descContainer}>
            {props.customComponent ? (
              props.customComponent
            ) : (
              <>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <button>Know More</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default InfoRow;

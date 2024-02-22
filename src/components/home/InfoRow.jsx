import React from "react";
import styles from "../../styles/home/infoRow.module.css";

function InfoRow(props) {
  function handleClick(msg) {
    alert(msg);
  }

  if (props.contentFirst) {
    return (
      <div className={styles.container}>
        <div className={`${styles.descContainer} ${styles.descContainerCF}`}>
          {props.customContent ? (
            props.customContent
          ) : (
            <>
              <h2>{props.title}</h2>
              <p>{props.desc}</p>
              <button>Know More</button>
            </>
          )}
        </div>
        <div
          className={`${styles.imgContainer} ${styles.imgContainerCF}`}
          style={{ height: props.customContent ? "auto" : "400px" }}
        >
          <img src={props.src} alt={props.title} />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{ height: props.customContent ? "auto" : "400px" }}
      >
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.descContainer}>
        {props.customContent ? (
          props.customContent
        ) : (
          <>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <button
              onClick={function () {
                handleClick("Hello");
              }}
            >
              Know More
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoRow;

import React from "react";
import styles from "../../styles/home/infoRow.module.css";

function InfoRow(props) {
  function handleClick(msg) {
    alert(msg);
  }

  function handleImgFirstClick(e) {
    alert("Img First Button CLicked!");
  }

  return (
    <>
      {props.contentFirst ? (
        <div className={styles.container}>
          <div className={styles.descContainer}>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <button
              onClick={function (e) {
                handleClick("Hello!");
              }}
            >
              Know More
            </button>
          </div>
          <div className={styles.imgContainer}>
            <img src={props.src} alt={props.title} />
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img src={props.src} alt={props.title} />
          </div>
          <div className={styles.descContainer}>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <button onClick={handleImgFirstClick}>Know More</button>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoRow;

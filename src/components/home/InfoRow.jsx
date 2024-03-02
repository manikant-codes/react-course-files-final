import React, { useState } from "react";
import styles from "../../styles/home/infoRow.module.css";

function InfoRow(props) {
  const [isContentFirst, setIsContentFirst] = useState(props.contentFirst);

  function handleClick() {
    setIsContentFirst(!isContentFirst);
  }

  return (
    <>
      {isContentFirst ? (
        <div className={styles.container}>
          <div className={styles.descContainer}>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <button onClick={handleClick}>Know More</button>
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
            <button onClick={handleClick}>Know More</button>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoRow;

import React from "react";
import { useState } from "react";
import styles from "../../styles/home/infoRow.module.css";

function InfoRow(props) {
  const { contentFirst, customContent, title, desc, src } = props;

  const [isContentFirst, setIsContentFirst] = useState(contentFirst);

  function handleClick() {
    setIsContentFirst(!isContentFirst);
  }

  if (isContentFirst) {
    return (
      <div className={styles.container}>
        <div className={`${styles.descContainer} ${styles.descContainerCF}`}>
          {customContent ? (
            customContent
          ) : (
            <>
              <h2>{title}</h2>
              <p>{desc}</p>
              <button onClick={handleClick}>Know More</button>
            </>
          )}
        </div>
        <div
          className={`${styles.imgContainer} ${styles.imgContainerCF}`}
          style={{ height: customContent ? "auto" : "400px" }}
        >
          <img src={src} alt={title} />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div
        className={styles.imgContainer}
        style={{ height: customContent ? "auto" : "400px" }}
      >
        <img src={src} alt={title} />
      </div>
      <div className={styles.descContainer}>
        {customContent ? (
          customContent
        ) : (
          <>
            <h2>{title}</h2>
            <p>{desc}</p>
            <button onClick={handleClick}>Know More</button>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoRow;

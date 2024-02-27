import React, { useState } from "react";
import styles from "../../../styles/home/infoRow.module.css";

function InfoRow(props) {
  const { src, title, desc, contentFirst, customComponent } = props;

  const [isContentFirst, setIsContentFirst] = useState(contentFirst);

  if (!title) return null;

  function handleClick() {
    setIsContentFirst(!isContentFirst);
  }

  return (
    <>
      {isContentFirst ? (
        <div className={styles.outerContainer}>
          <div className={styles.descContainerCF}>
            {customComponent ? (
              customComponent
            ) : (
              <>
                <h2>{title}</h2>
                <p>{desc}</p>
                <button onClick={handleClick}>Know More</button>
              </>
            )}
          </div>
          <div className={styles.imgContainerCF}>
            <img src={src} alt={title} />
          </div>
        </div>
      ) : (
        <div className={styles.outerContainer}>
          <div className={styles.imgContainer}>
            <img src={src} alt={title} />
          </div>
          <div>
            <div className={styles.descContainer}>
              {customComponent ? (
                customComponent
              ) : (
                <>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <button onClick={handleClick}>Know More</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoRow;

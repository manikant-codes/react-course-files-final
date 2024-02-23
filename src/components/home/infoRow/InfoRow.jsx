import React from "react";
import styles from "../../../styles/home/infoRow.module.css";
import { animated, useSpring } from "@react-spring/web";

function InfoRow(props) {
  const { src, title, desc, contentFirst, customComponent } = props;

  const animationStyles = useSpring({
    config: {
      duration: 2000,
    },
    from: {
      scale: 0,
      opacity: 0,
    },
    to: {
      scale: 1,
      opacity: 1,
    },
  });

  function handleClick(msg) {
    console.log(msg);
  }

  function handleClickWrapper() {
    handleClick("Hello");
  }

  return (
    <>
      {contentFirst ? (
        <div className={styles.outerContainer}>
          <div className={styles.descContainerCF}>
            {customComponent ? (
              customComponent
            ) : (
              <>
                <h2>{title}</h2>
                <p>{desc}</p>
                <button>Know More</button>
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
          <animated.div style={animationStyles}>
            <div className={styles.descContainer}>
              {customComponent ? (
                customComponent
              ) : (
                <>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <button
                    onClick={function (event) {
                      console.log(event);
                      handleClick("Hello");
                    }}
                  >
                    Know More
                  </button>
                </>
              )}
            </div>
          </animated.div>
        </div>
      )}
    </>
  );
}

export default InfoRow;

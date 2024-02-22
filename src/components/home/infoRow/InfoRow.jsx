import React from "react";
import styles from "../../../styles/home/infoRow.module.css";
import { animated, useSpring } from "@react-spring/web";

function InfoRow(props) {
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
          <animated.div style={animationStyles}>
            <div className={styles.descContainer}>
              {props.customComponent ? (
                props.customComponent
              ) : (
                <>
                  <h2>{props.title}</h2>
                  <p>{props.desc}</p>
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

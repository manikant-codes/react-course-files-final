import React from "react";
import styles from "../../styles/common/loader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Loader(props) {
  const {
    containerHeight = "auto",
    containerWidth = "auto",
    containerStyles = {},
    loaderSize = "1rem",
    loaderStyles = {},
    loaderColor = "inherit",
  } = props;
  return (
    <div
      className={styles.loaderContainer}
      style={{
        ...containerStyles,
        height: containerHeight,
        width: containerWidth,
      }}
    >
      <FontAwesomeIcon
        icon={faSpinner}
        className={styles.loader}
        spin
        style={{ ...loaderStyles, fontSize: loaderSize }}
        color={loaderColor}
      />
    </div>
  );
}

export default Loader;

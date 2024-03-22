import React from "react";
import styles from "../../styles/common/loader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Loader(props) {
  const {
    containerHeight = "auto",
    containerWidth = "auto",
    containerStyles = {},
    iconSize = "1rem",
    iconStyles = {},
    iconColor = "inherit",
  } = props;
  return (
    <div
      className={`flex-h-center ${styles.container}`}
      style={{
        ...containerStyles,
        height: containerHeight,
        width: containerWidth,
      }}
    >
      <FontAwesomeIcon
        icon={faSpinner}
        className={styles.icon}
        style={{ ...iconStyles, fontSize: iconSize }}
        color={iconColor}
      />
    </div>
  );
}

export default Loader;

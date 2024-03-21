import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/common/loader.module.css";

function Loader(props) {
  const {
    containerHeight = "auto",
    containerWidth = "auto",
    iconSize = "1rem",
    color = "inherit",
    iconStyles = {},
    containerStyles = {},
  } = props;
  return (
    <div
      className={styles.iconContainer}
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
        spin
        color={color}
      />
    </div>
  );
}

export default Loader;

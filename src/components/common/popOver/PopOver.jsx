import {
  faCancel,
  faCheck,
  faInfo,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../../styles/common/popOver.module.css";

function PopOver(props) {
  const { message, status = "default", hidePopOver, showPopOver } = props;

  const statusMap = {
    info: { icon: faInfo, color: "#2196f3" },
    warning: { icon: faWarning, color: "#ffc107" },
    error: { icon: faCancel, color: "#f44336" },
    success: { icon: faCheck, color: "#4caf50" },
    default: { icon: faInfo, color: "#673ab7" },
  };

  if (showPopOver) {
    setTimeout(hidePopOver, 2000);
  }

  return (
    <div
      className={`${styles.popOverContainer} ${
        showPopOver ? styles.isVisible : ""
      }`}
      style={{ borderLeft: "6px solid" + statusMap[status].color }}
    >
      <div className={styles.messageContainer}>
        <FontAwesomeIcon icon={statusMap[status].icon} /> {message}
      </div>
    </div>
  );
}

export default PopOver;

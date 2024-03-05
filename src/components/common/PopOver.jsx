import React from "react";
import styles from "../../styles/common/popOver.module.css";
import {
  faCheckCircle,
  faClose,
  faInfo,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PopOver(props) {
  const { message, status = "default", isVisible, hidePopOver } = props;

  const statusMap = {
    info: { icon: faInfo, color: "#2196f3" },
    success: { icon: faCheckCircle, color: "#4caf50" },
    warning: { icon: faWarning, color: "#ffb300" },
    error: { icon: faClose, color: "#f44336" },
    default: { icon: faInfo, color: "#009688" },
  };

  if (isVisible) {
    setTimeout(hidePopOver, 3000);
  }

  return (
    <div
      className={`${styles.popOverContainer}  ${
        isVisible ? styles.visible : ""
      }`}
      style={{ borderColor: statusMap[status].color }}
    >
      <div className={styles.messageContainer}>
        <div style={{ backgroundColor: statusMap[status].color }}>
          <FontAwesomeIcon icon={statusMap[status].icon} />
        </div>
        {message}
      </div>
    </div>
  );
}

export default PopOver;

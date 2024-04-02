import React from "react";
import styles from "../../styles/common/popOver.module.css";
import {
  faCheck,
  faClose,
  faInfo,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PopOver(props) {
  const { message, status, isVisible, hidePopOver } = props;

  const statusMap = {
    info: { icon: faInfo, color: "#2196f3" },
    success: { icon: faCheck, color: "#4caf50" },
    warning: { icon: faWarning, color: "#ffa000" },
    error: { icon: faClose, color: "#f44336" },
    default: { icon: faInfo, color: "#00bcd4" },
  };

  if (isVisible) {
    setTimeout(hidePopOver, 4000);
  }

  return (
    <div
      className={`${styles.popOverContainer} ${
        isVisible ? styles.visible : ""
      }`}
      style={{ borderColor: statusMap[status].color }}
    >
      <div className={styles.msgContainer}>
        <FontAwesomeIcon
          icon={statusMap[status].icon}
          style={{ backgroundColor: statusMap[status].color }}
        />
        {message}
      </div>
    </div>
  );
}

export default PopOver;

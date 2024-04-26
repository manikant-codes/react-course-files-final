import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../../styles/home/tasksList.module.css";

function Header() {
  return (
    <div className={styles.containerHeader}>
      <h2>Tasks</h2>
      <button>
        <FontAwesomeIcon icon={faAdd} /> Add Task
      </button>
    </div>
  );
}

export default Header;

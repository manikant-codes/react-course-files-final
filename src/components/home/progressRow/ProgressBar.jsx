import React from "react";
import styles from "../../../styles/home/progressRow.module.css";
import { motion } from "framer-motion";

function ProgressBar(props) {
  return (
    <div className={styles.progressBarContainerOuter}>
      <p>
        <span>{props.title}</span>
        <span>{props.value}%</span>
      </p>
      <div className={styles.progressBarContainerInner}>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${props.value}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;

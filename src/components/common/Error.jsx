import React from "react";
import styles from "../../styles/common/error.module.css";

function Error(props) {
  const { message = "Something went wrong!" } = props;
  return (
    <div className={styles.container}>
      <p>{message}</p>
    </div>
  );
}

export default Error;

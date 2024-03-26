import React from "react";
import styles from "../../../styles/home/clientsRow.module.css";

function ClientLogo(props) {
  return (
    <div className={styles.logoContainer}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default ClientLogo;

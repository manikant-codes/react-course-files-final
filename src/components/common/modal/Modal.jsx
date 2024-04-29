import React from "react";
import styles from "./modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/Button";

function Modal({ title, body, footer, toggleModal }) {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerModal}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <Button color="error" onClick={toggleModal}>
            <FontAwesomeIcon icon={faClose} />
          </Button>
        </div>
        {body && <div className={styles.body}>{body}</div>}
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;

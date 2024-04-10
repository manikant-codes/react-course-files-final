import React from "react";
import styles from "../../styles/contact/contactInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function ContactInfo() {
  return (
    <div className={styles.containerMain}>
      <div className={styles.infoItemContainer}>
        <FontAwesomeIcon icon={faLocation} />
        <div className={styles.infoItemContainerInner}>
          <h4>Location:</h4>
          <p>A108 Adam Street, New York, NY 535022</p>
        </div>
      </div>

      <div className={styles.infoItemContainer}>
        <FontAwesomeIcon icon={faEnvelope} />
        <div className={styles.infoItemContainerInner}>
          <h4>Email:</h4>
          <p>info@example.com</p>
        </div>
      </div>

      <div className={styles.infoItemContainer}>
        <FontAwesomeIcon icon={faPhone} />
        <div className={styles.infoItemContainerInner}>
          <h4>Call:</h4>
          <p>+1 5589 55488 55s</p>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
        frameborder="0"
        style={{ border: 0, width: "100%", height: "290px" }}
        allowfullscreen=""
      ></iframe>
    </div>
  );
}

export default ContactInfo;

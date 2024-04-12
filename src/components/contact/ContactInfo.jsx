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
        width="100%"
        height="300"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=yogi%20chowk%20surat+(LOPE)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      {/* <a href="https://www.versicherungen.at/pflegegeldversicherung/">
        Pflegegeld-Versicherung
      </a> */}
      {/* <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=c135610087be184bd5f1e242126714733ad6b0e7"
      ></script> */}
    </div>
  );
}

export default ContactInfo;

import {
  faEnvelope,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../../styles/contact/contactInfo.module.css";

function ContactInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <FontAwesomeIcon icon={faMapLocationDot} />
        <div>
          <h4>Location:</h4>
          <p>A108 Adam Street, New York, NY 535022</p>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <FontAwesomeIcon icon={faEnvelope} />
        <div>
          <h4>Email:</h4>
          <p>info@example.com</p>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <FontAwesomeIcon icon={faPhone} />
        <div>
          <h4>Call:</h4>
          <p>+1 5589 55488 55s</p>
        </div>
      </div>
      <iframe
        width="100%"
        height="200"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=yogi%20chowk%20surat+(Lope%20Multimedia%20Institute)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=c9fd5d38a1c72e1c770f88f8b2e47043337b49a0"
      ></script>
    </div>
  );
}

export default ContactInfo;

import {
  faEnvelope,
  faLocation,
  faLocationArrow,
  faLocationPin,
  faLocationPinLock,
  faMailForward,
  faMapLocationDot,
  faMessage,
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
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
        frameborder="0"
        //   style="border:0; width: 100%; height: 290px;"
        allowfullscreen=""
      ></iframe> */}
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
      {/* <a href="https://www.easybooking.eu/">Hotel Software</a> */}
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=c9fd5d38a1c72e1c770f88f8b2e47043337b49a0"
      ></script>
    </div>
  );
}

export default ContactInfo;

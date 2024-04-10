import React from "react";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Title from "../components/common/Title";
import styles from "../styles/contact/contact.module.css";

function Contact() {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerTitle}>
        <Title
          title="Contact Us"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, debitis!"
        />
      </div>
      <div className={styles.containerInner}>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;

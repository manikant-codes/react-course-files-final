import React from "react";
import Title from "../components/common/Title";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import styles from "../styles/contact/contact.module.css";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <Title
        title="Contact Us"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut laudantium rem consequatur quidem voluptates quae!"
      />
      <div className={styles.contactContainerInner}>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;

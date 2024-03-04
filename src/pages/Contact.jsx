import React from "react";
import ContactInfo from "../components/contact/contactInfo/ContactInfo";
import ContactForm from "../components/contact/contactForm/ContactForm";
import styles from "../styles/contact/contact.module.css";
import Title from "../components/common/Title";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <Title
        title="Contact Us"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea facere aspernatur, aut doloremque recusandae impedit."
      />
      <div className={styles.contactContainerInner}>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;

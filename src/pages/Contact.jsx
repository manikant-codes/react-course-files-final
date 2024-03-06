import React from "react";
import Title from "../components/common/Title";
import ContactInfo from "../components/contact/contactInfo/ContactInfo";
import ContactForm from "../components/contact/contactForm/ContactForm";
import styles from "../styles/contact/contact.module.css";

function Contact(props) {
  const { containerStyles } = props;
  return (
    <div className={styles.contactContainer} style={{ ...containerStyles }}>
      <Title
        title="Contact Us"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati provident earum, eius ullam in enim?"
      />
      <div className={styles.contactContainerInner}>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;

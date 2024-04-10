import React from "react";
import styles from "../../styles/contact/contactForm.module.css";

function ContactForm() {
  return (
    <div className={styles.containerMain}>
      <form className={styles.form}>
        <div className={styles.nameEmail}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" id="name" required="" />
          </div>
          <div>
            <label htmlFor="name">Your Email</label>
            <input type="email" name="email" id="email" required="" />
          </div>
        </div>
        <div>
          <label htmlFor="name">Subject</label>
          <input type="text" name="subject" id="subject" required="" />
        </div>
        <div>
          <label htmlFor="name">Message</label>
          <textarea name="message" rows="10" required=""></textarea>
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

import React from "react";
import styles from "../../styles/contact/contactForm.module.css";
import emailjs from "@emailjs/browser";

function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(() => {
        alert("SUCCESS!");
        e.target.reset();
      })
      .catch((error) => {
        alert("FAILED...", error.text);
      });
  }

  return (
    <div className={styles.containerMain}>
      <form className={styles.form} onSubmit={sendEmail}>
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

import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import styles from "../../../styles/contact/contactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import PopOver from "../../common/PopOver";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(0);

  function hidePopOver() {
    setIsVisible(false);
    setIsError(0);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EJS_SERVICE_ID,
        process.env.REACT_APP_EJS_TEMPLATE_ID,
        form,
        {
          publicKey: process.env.REACT_APP_EJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        form.reset();
        setIsError(-1);
      })
      .catch((error) => {
        setIsError(1);
      })
      .finally(() => {
        setIsLoading(false);
        setIsVisible(true);
      });
  }

  return (
    <div className={styles.fromContainer} onSubmit={handleSubmit}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.nameEmailContainer}>
          <div>
            <label htmlForm="name">Your Name</label>
            <input id="name" type="text" name="name" className="form-control" />
          </div>
          <div>
            <label htmlFor="name">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
            />
          </div>
        </div>
        <div>
          <label htmlFor="name">Subject</label>
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
          />
        </div>
        <div>
          <label htmlFor="name">Message</label>
          <textarea className="form-control" name="message" rows="5"></textarea>
        </div>
        <div>
          <button type="submit" className={styles.submitBtn}>
            {isLoading ? "Sending..." : "Send Message"}
            {isLoading && (
              <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />
            )}
          </button>
        </div>
      </form>
      <PopOver
        message={
          isError === 1
            ? "Failed to submit form!"
            : "Form submitted successfully!"
        }
        status={isError === 1 ? "error" : "success"}
        isVisible={isVisible}
        hidePopOver={hidePopOver}
      />
    </div>
  );
}

export default ContactForm;

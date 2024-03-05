import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import styles from "../../styles/contact/contactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import PopOver from "../common/PopOver";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(0);

  function hidePopOver() {
    setIsVisible(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    try {
      setLoading(true);

      emailjs
        .sendForm(
          // process.env.REACT_APP_EJS_SERVICE_ID,
          "",
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
          setLoading(false);
          setIsVisible(true);
        });
    } catch (error) {
      setIsError(1);
    } finally {
      setIsVisible(true);
      setLoading(false);
    }
  }

  return (
    <div className={styles.fromContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.nameEmailContainer}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-control"
              required=""
            />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              name="email"
              required=""
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            className="form-control"
            name="subject"
            required=""
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="form-control"
            name="message"
            rows="5"
            required=""
          ></textarea>
        </div>
        <div>
          <button type="submit" className={styles.submitBtn}>
            {loading ? "Sending..." : "Send Message"}
            {loading && (
              <FontAwesomeIcon className={styles.spinner} icon={faSpinner} />
            )}
          </button>
        </div>
      </form>
      <PopOver
        message={
          isError === 1
            ? "Failed to submit the form."
            : "Form submitted successfully."
        }
        status={isError === 1 ? "error" : "success"}
        isVisible={isVisible}
        hidePopOver={hidePopOver}
      />
    </div>
  );
}

export default ContactForm;

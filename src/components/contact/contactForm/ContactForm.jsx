import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import styles from "../../../styles/contact/contactForm.module.css";
import PopOver from "../../common/popOver/PopOver";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPopOver, setShowPopOver] = useState(false);
  const [isError, setIsError] = useState(0);

  function hidePopOver() {
    setShowPopOver(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    try {
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
          console.log("FAILED...", error.text);
          setIsError(1);
        })
        .finally(() => {
          setIsLoading(false);
          setShowPopOver(true);
        });
    } catch (error) {
      setIsError(1);
    } finally {
      setIsLoading(false);
      setShowPopOver(true);
    }
  }

  return (
    <div className={styles.fromContainer}>
      <form id="contactForm" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.nameEmailContainer}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              required={true}
            />
          </div>
          <div>
            <label htmlFor="name">Your Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              required={true}
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
            required={true}
          />
        </div>
        <div>
          <label htmlFor="name">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="5"
            required={true}
          ></textarea>
        </div>
        <div>
          <button type="submit">
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      <PopOver
        message={
          isError === 1
            ? "Faile to submit form data!"
            : "Form submitted successfully!"
        }
        status={isError === 1 ? "error" : "success"}
        hidePopOver={hidePopOver}
        showPopOver={showPopOver}
      />
    </div>
  );
}

export default ContactForm;

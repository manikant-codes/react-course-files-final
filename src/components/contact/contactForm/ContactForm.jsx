import React, { useState } from "react";
import styles from "../../../styles/contact/contactForm.module.css";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [formState, setFormState] = useState(initialFormState);

  function handleChange(e) {
    console.log("e", e);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  console.log("formState", formState);

  return (
    <div className={styles.fromContainer}>
      <form className={styles.form}>
        <div className={styles.nameEmailContainer}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              required=""
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">Your Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              required=""
              value={formState.email}
              onChange={handleChange}
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
            required=""
            value={formState.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="5"
            required=""
            value={formState.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

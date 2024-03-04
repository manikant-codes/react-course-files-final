import emailjs from "@emailjs/browser";
import React from "react";
import styles from "../../../styles/contact/contactForm.module.css";

function ContactForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  // function handleNameChange(e) {
  //   setName(e.target.value);
  // }

  // function handleEmailChange(e) {
  //   setEmail(e.target.value);
  // }

  // function handleSubjectChange(e) {
  //   setSubject(e.target.value);
  // }

  // function handleMessageChange(e) {
  //   setMessage(e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    emailjs
      .sendForm("SERVICE_ID", "TEMPLATE_ID", form, {
        publicKey: "PUBLIC_KEY",
      })
      .then(() => {
        form.reset();
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        alert("Failed to submit form!");
      });
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
              required=""
              // value={name}
              // onChange={handleNameChange}
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
              // value={email}
              // onChange={handleEmailChange}
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
            // value={subject}
            // onChange={handleSubjectChange}
          />
        </div>
        <div>
          <label htmlFor="name">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="5"
            required=""
            // value={message}
            // onChange={handleMessageChange}
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

import emailjs from "@emailjs/browser";
import React from "react";
import styles from "../../styles/contact/contactForm.module.css";

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
      .sendForm("service_1lj7h8a", "template_lqb9om5", form, {
        publicKey: "cLinWhNUqZbIpCAga",
      })
      .then(() => {
        form.reset();
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        alert("Failed to submit form!");
      });
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
              // value={name}
              // onChange={handleNameChange}
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
              // value={email}
              // onChange={handleEmailChange}
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
            // value={subject}
            // onChange={handleSubjectChange}
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

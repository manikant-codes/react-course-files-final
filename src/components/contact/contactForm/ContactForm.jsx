import emailjs from "@emailjs/browser";
import React from "react";
import styles from "../../../styles/contact/contactForm.module.css";

function ContactForm() {
  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

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

  // function handleNameChange(e) {
  //   setFormState({ ...formState, name: e.target.value });
  // }
  // function handleEmailChange(e) {
  //   setFormState({ ...formState, email: e.target.value });
  // }
  // function handleSubjectChange(e) {
  //   setFormState({ ...formState, subject: e.target.value });
  // }
  // function handleMessageChange(e) {
  //   setFormState({ ...formState, message: e.target.value });
  // }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

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
        alert("Form submitted!");
      })
      .catch((error) => {
        alert("Failte to submit form!");
      });
  }

  return (
    <div className={styles.fromContainer} onSubmit={handleSubmit}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.nameEmailContainer}>
          <div>
            <label htmlForm="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-control"
              // required={true}
              // value={formState.name}
              // onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="name">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              // required={true}
              // value={formState.email}
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
            // required={true}
            // value={formState.subject}
            // onChange={handleSubjectChange}
          />
        </div>
        <div>
          <label htmlFor="name">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="5"
            // required={true}
            // value={formState.message}
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

import { useState } from "react";
import classes from "./contact-form.module.css";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    const reqBody = { email, name, message };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) => {
        console.log(data);
        alert("Message sent successfully!");
        setEmail("");
        setName("");
        setMessage("");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <section className={classes.contact}>
      <h2>How can I help you?</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
export default ContactForm;

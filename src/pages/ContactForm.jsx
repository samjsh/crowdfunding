import React from "react";
import { Link } from "react-router-dom";
import "./ContactForm.css";

function ContactForm() {
  return (
    <form
      className="contact-form"
      action="https://formspree.io/f/meqwpyqz"
      method="POST"
    >
      <div className="form-field">
        <label className="form-label">
          <p className="form-text">Email:</p>
          <input type="email" name="email"></input>
        </label>
      </div>
      <div className="form-field">
        <label className="form-label">
          <p className="form-text">Message:</p>
          <textarea name="message"></textarea>
        </label>
      </div>

      <button type="submit" className="form-hero-btn">
        Send
      </button>
      {/* <button className="form-hero-btn">
        {" "}
        <Link className="form-hero-btn">Send</Link>
      </button> */}
    </form>
  );
}

export default ContactForm;

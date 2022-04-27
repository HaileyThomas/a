import react, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_525w19k",
        "template_fqduybj",
        form.current,
        "8wui2-E4Rb2XLKN-a"
      )
      .then(
        (result) => {
          alert(result.text + " Message Sent!");
        },
        (error) => {
          alert(error.text + " Message Not Sent!");
        }
      );
  };

  return (
    <section className="contact-container">
      <h1>Contact</h1>
      <p className="contact-text">
        <b>Email:</b>{" "}
        <a href="mailto:haileyraethomas@gmail.com" className="contact-link">
          haileyraethomas@gmail.com
        </a>
      </p>
      <p className="contact-text">
        <b>LinkedIn:</b>{" "}
        <a
          href="https://www.linkedin.com/in/haileyraethomas"
          className="contact-link"
        >
          https://www.linkedin.com/in/haileyraethomas/
        </a>
      </p>
      <p className="contact-text">
        <b>GitHub:</b>{" "}
        <a href="https://github.com/HaileyThomas" className="contact-link">
          https://github.com/HaileyThomas
        </a>
      </p>
      <p className="contact-text">
        Feel free to contact me using the form below!
      </p>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="form-input"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Your message here"
            className="form-input"
          />
          <input type="submit" value="send message" className="form-btn" />
        </form>
      </div>
    </section>
  );
}

export default Contact;

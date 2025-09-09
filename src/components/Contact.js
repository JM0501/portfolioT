import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lh6ad7h", // your EmailJS service ID
        "template_x7oalul", // your EmailJS template ID
        form.current,
        "wnwjX2KJpSCkc9ql7" // your public key
      )
      .then(
        () => setStatus("✅ Message sent successfully!"),
        (error) => setStatus("❌ Failed to send message: " + error.text)
      );

    e.target.reset();
  };

  return (
    <div className="section contact">
      <h2>Contact Me</h2>
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" rows="6" placeholder="Message" required />
        <input type="submit" value="Send Message" />
        {status && <p style={{ marginTop: "1rem", textAlign: "center" }}>{status}</p>}
      </form>
    </div>
  );
}

import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cz57mzr",
        "template_9kajsjv",
        form.current,
        "PClicAw8YUNBWiztW"
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset();
  };

  const notify = () =>
    toast(
      "Thank's for your message, I will get back to you as soon as possible "
    );

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>dervieux.ben@gmail.com</h5>
            <a
              href="mailto:dervieux.ben@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <AiOutlineLinkedin className="contact_option-icon" />
            <h4>Linkedin</h4>
            <h5>Benjamin Dervieux</h5>
            <a
              href="https://www.linkedin.com/in/benjamin-dervieux-5bb123220/"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>06.59.24.79.40</h5>
            <a
              href="https://api.whatsapp.com/send?phone+0033659247940"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" onClick={notify}>
            Send Message
          </button>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;

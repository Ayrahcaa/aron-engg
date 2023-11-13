import React from "react";
import "./contactpage.css";
import BackgroundImg from "../../assets/bg2.jpeg";
import GoToTop from "../GoToTop";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tyvpa0h",
        "template_05d08u6",
        refForm.current,
        "jNPXXPpRD-oYJIm25"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };
  return (
    <>
      <div className="contact-page">
        <div
          className="contact-container"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: `cover`,
            backgroundPositionY: `-200px`,
          }}
        >
          <div className="contact-box">
            <div>
              <p>
                Home / <span>contact</span>
              </p>
              <h1>CONTACT US</h1>
            </div>
          </div>
        </div>
        <div className="contact-content">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14129.360227896104!2d85.33366!3d27.706785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194eb0dd4203%3A0x9f9d486a258772a7!2sARON%20Engineering%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1698564257439!5m2!1sen!2snp"
              width="600"
              height="500"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ilami agro and tech"
            ></iframe>
          </div>
          <div className="input-container">
            <h1>If You Have Any Query, Please Contact Us</h1>
            <div className="input-field">
              <form ref={refForm} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="user_name"
                  id="fullname"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="text"
                  name="user_subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
                <textarea
                  name="user_message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  required
                ></textarea>
                <button>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
};

export default ContactPage;

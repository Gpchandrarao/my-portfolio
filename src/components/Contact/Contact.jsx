import React from "react";
import "./Contact.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer className="contact-footer" id="contact">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FCA61F"
          fill-opacity="1"
          d="M0,320L34.3,288C68.6,256,137,192,206,144C274.3,96,343,64,411,90.7C480,117,549,203,617,240C685.7,277,754,267,823,250.7C891.4,235,960,213,1029,218.7C1097.1,224,1166,256,1234,256C1302.9,256,1371,224,1406,208L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div className="contact-container">
        <div className="contact-text">
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className="contact-links">
          <li className="contact-link">
            <img
              src={getImageUrl("contact/emailIcon.png")}
              alt="Email Icon"
              className="email"
            />
            <a href="https://mail.google.com/mail/">
              gandikotapoornachandrarao@gmail.com
            </a>
          </li>
          <li className="contact-link">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="Link in Icon"
              className="linkedin"
            />
            <a href="https://www.linkedin.com/in/g-poornachandrarao/">
              www.linkedin.com/in/g-poornachandrarao
            </a>
          </li>
          <li className="contact-link">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="github Icon"
              className="git"
            />
            <a href="https://github.com/Gpchandrarao">github.com/myname</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;

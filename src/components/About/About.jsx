import React from "react";
import "./About.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className="about-container" id="about">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="me sitting with a laptop"
          className="about-img"
        />
        <ul className="about-itmes">
          <li className="about-itme">
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className="about-itme-text">
              <h3>Frontend Developer</h3>
              <p>
                I'm a front-end developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className="about-itme">
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className="about-itme-text">
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className="about-itme">
            <img src={getImageUrl("about/uiIcon.png")} alt="Cursor icon" />
            <div className="about-itme-text">
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

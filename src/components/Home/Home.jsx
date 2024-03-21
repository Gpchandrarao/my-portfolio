import React from "react";
import "./Home.css";
import { getImageUrl } from "../../utils";

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-left">
        <h1 className="home-title">
          Hi, I'm <span className="hero-color">G poornachandrarao </span>
        </h1>
        <div className="home-description">
          <div className="home-description-text">I'm a</div>
          <ul className="dynamic-text">
            <li>
              <span>full-stack developer</span>
            </li>
            <li>
              <span>frontend developer</span>
            </li>
            <li>
              <span>Backend developer</span>
            </li>
          </ul>
        </div>

        <a href="mailto:myemail@gmail.com" className="contact-btn">
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero"
        className="hero-img"
      />
      <div className="topBlur" style={{ background: "rgba(238, 210, 255)" }} />
      <div className="bottomBlur" style={{ background: "#c1f5ff" }} />
    </section>
  );
};

export default Home;

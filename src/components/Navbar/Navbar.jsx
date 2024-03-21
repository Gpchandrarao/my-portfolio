import React, { useState } from "react";
import "./Navbar.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBroder, setShowBroder] = useState(0);

  return (
    <nav className="navbar">
      <a className="title" href="/">
        Portfolio
      </a>
      <div className="menu">
        <img
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          className="menu-btn"
          alt="menubutton"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`menu-items ${menuOpen && "menu-open"}`}
          onClick={() => setMenuOpen(false)}
        >
          <li
            onClick={() => setShowBroder(0)}
            className={`${showBroder === 0 && "boder-active"}`}
          >
            <a href="#about">About</a>
          </li>
          <li
            onClick={() => setShowBroder(1)}
            className={`${showBroder === 1 && "boder-active"}`}
          >
            <a href="#experience">Experience</a>
          </li>
          <li
            onClick={() => setShowBroder(2)}
            className={`${showBroder === 2 && "boder-active"}`}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            onClick={() => setShowBroder(3)}
            className={`${showBroder === 3 && "boder-active"}`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

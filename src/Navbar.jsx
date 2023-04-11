import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { navLinks } from "./nav-links";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // const navLinks1 = navLinks;
  //set navbar button to toggle
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <div className="Navbar">
        <div className="Navbar-title">
          <h1>!velia</h1>
        </div>

        <div className="Navbar-menu" onClick={toggle}>
          {isOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </div>
      <div className="nav-links">
        <ul>
          <li data-text="home">
            <Link to="/">Home</Link>
          </li>
          <li data-text="about">
            <Link to="/about">About</Link>
          </li>
          <li data-text="work">
            <Link to="/work">Work</Link>
          </li>
          <li data-text="contact">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

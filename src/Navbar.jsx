import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./nav-links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const navId = document.getElementById("NavItems");
  const navId = document.getElementsByClassName("nav-links");

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

        <nav className="Navbar-menu" onClick={toggle}>
          {isOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </nav>
      </div>

      <div
        className="nav-links"
        style={{
          display: isOpen ? "block" : "none",
        }}
        onClick={toggle}
      >
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

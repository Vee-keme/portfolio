import "./App.css";
import HomePage from "./pages/HomePage";
import React from "react";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  let cursor = document.querySelector(".cursor");
  let outerCursor = document.querySelector(".outerCursor");

  document.addEventListener("mousemove", moveCursor);
  function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
  }

  let links = document.querySelectorAll("a");
  console.log(links);

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      cursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("grow");
    });
  });
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <div className="cursor"></div>
      <div className="outerCursor"></div>
    </div>
  );
}

export default App;

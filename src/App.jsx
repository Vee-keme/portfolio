import "./App.css";
import HomePage from "./pages/HomePage";
import React from "react";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* <HomePage /> */}
    </div>
  );
}

export default App;

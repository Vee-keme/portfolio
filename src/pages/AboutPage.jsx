import React from "react";
import "../styles/Aboutpage.css";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      className="Aboutpage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h1>About Page</h1>
      <h4>
        Hello, my name is Velia Precious and I am a developer and technical
        writer. With a passion for both coding and writing, I find myself
        spending 80% of my time coding and the remaining 20% crafting clear and
        concise technical documentation. As an avid anime fan, I draw
        inspiration from the creative and imaginative world of anime to fuel my
        coding and writing endeavors. My goal is to write code that not only
        functions efficiently, but is also easy to understand and maintain.
        Whether it's working on a complex algorithm or drafting a user manual, I
        am dedicated to producing high-quality work that meets the needs of both
        users and developers.
      </h4>
    </motion.div>
  );
}

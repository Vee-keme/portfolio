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
      <motion.h1
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: "0.5", delay: "0.6" }}
      >
        Hello, I am <span>Velia Precious</span> a seasoned developer and
        proficient technical writer.
      </motion.h1>
      <h4>
        My expertise lies at the intersection of coding and crafting articulate
        documentation, with a remarkable 80% of my time dedicated to coding,
        while the remaining 20% is devoted to honing concise and intelligible
        technical materials. Drawing immense inspiration from the captivating
        realm of anime, I infuse creativity and imagination into my coding and
        writing pursuits. My ultimate objective is to engineer code that not
        only operates with utmost efficiency but is also effortlessly
        comprehensible and maintainable. Be it tackling intricate algorithms or
        composing user manuals, I ardently strive to deliver exceptional work of
        premium quality, meticulously tailored to cater to the diverse
        requirements of both end-users and fellow developers."
      </h4>
    </motion.div>
  );
}

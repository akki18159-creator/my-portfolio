"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-white/10 bg-black/40"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LEFT LOGO */}
        <a href="#hero">
          <h1 className="text-xl font-bold text-white hover:text-blue-400 transition">
            Mukul Kumar
          </h1>
        </a>

        {/* RIGHT MENU */}
        <div className="flex items-center gap-8 text-white font-medium">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>

          {/* Icons */}
          <div className="flex items-center gap-4 ml-2">
            <a
              href="https://www.linkedin.com/in/mukul-lout-"
              target="_blank"
              className="text-xl hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="text-xl hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
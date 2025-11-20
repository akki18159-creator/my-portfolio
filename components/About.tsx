"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-lg text-slate-300 leading-relaxed"
      >
        I’m an Infra Support & Trade Monitoring Engineer with strong experience 
        in NSE, BSE, and MCX exchange systems.  
        Skilled in Python automation, Selenium scripting, API integration, 
        Linux (CentOS) server handling, log monitoring, and backend updates 
        using PHP. Passionate about performance, stability, and automation 
        in financial trading systems.
      </motion.p>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Python", "Bash/Shell", "Linux (CentOS)",
    "Selenium Automation", "REST APIs (GET/POST)",
    "Trade Log Monitoring", "PHP Backend",
    "Networking Basics", "System Debugging"
  ];

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white mb-8"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#0f1115] border border-slate-700 text-white py-3 px-4 rounded-lg text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

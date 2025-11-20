"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Infrastructure & Trade Monitoring Engineer",
      company: "CD Integrated Services Ltd.",
      duration: "Jun 2023 – Present",
      points: [
        "Real-time monitoring of NSE, BSE, and MCX trade logs, order flow, tick data, and system health.",
        "Develop Python automation scripts using Selenium & GET/POST APIs for all three exchanges.",
        "Handling Linux (CentOS) production servers, cron jobs, system services, network traffic, and latency monitoring.",
        "Shell scripting for routine automation, log rotation, server checks, and alert generation.",
        "Backend modifications on the company website (PHP-based backend updates).",
        "Incident analysis, debugging, connectivity validation, and ensuring stable trade operations.",
        "Monitoring packet behavior, link failures, disconnections, and real-time connectivity with exchanges.",
        "Maintaining trade monitoring dashboards, system uptime, and exchange connectivity health."
      ],
    },

    {
      role: "Technical Intern",
      company: "Beanbyte Software Solutions, Jaipur",
      duration: "Jan 2023 – Jun 2023",
      points: [
        "Worked on software development fundamentals and real-world project workflows.",
        "Hands-on experience with system operations, debugging, and backend logic understanding.",
        "Learned how production-level applications are managed and maintained."
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white mb-12"
      >
        Experience
      </motion.h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0d1117]/70 border border-slate-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
            <p className="text-slate-400 mt-1">{exp.company}</p>
            <p className="text-slate-500 text-sm">{exp.duration}</p>

            <ul className="mt-4 list-disc ml-6 space-y-2 text-slate-300">
              {exp.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

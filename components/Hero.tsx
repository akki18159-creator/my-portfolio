"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#050509] pt-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-blue-500">Mukul Kumar</span>
          </h1>

          <p className="text-lg text-slate-300 mt-4">
            Infra Support & Trade Monitor Engineer  
            (NSE • BSE • MCX • Python • Linux • Shell Scripting)
          </p>

          <a
            href="/Mukul_CV.pdf"
            download
            className="inline-block mt-6 bg-blue-600 px-6 py-3 rounded-lg text-white font-medium hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/mukul.jpeg"
            width={400}
            height={400}
            alt="Mukul"
            className="rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

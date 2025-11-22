"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // 🔹 Replace this with your Formspree URL
  const FORMSPREE_URL = "https://formspree.io/f/xeodablo"; // <-- Yaha apna real URL daalna

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }

    setLoading(false);
  }

  return (
    <section id="contact" className="py-20 px-4 bg-[#050309] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>

        <p className="text-gray-400 mb-10">
          Feel free to reach out for any opportunities or collaborations.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 text-left bg-[#0c0a13] p-8 rounded-xl shadow-lg"
        >
          <div>
            <label className="block mb-2">Name</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 bg-[#12101a] rounded border border-gray-700 focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 bg-[#12101a] rounded border border-gray-700 focus:outline-none"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block mb-2">Message</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-2 bg-[#12101a] rounded border border-gray-700 focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* STATUS MESSAGES */}
          {status === "SUCCESS" && (
            <p className="text-green-400 font-semibold">
              ✅ Message sent! I’ll get back to you soon.
            </p>
          )}
          {status === "ERROR" && (
            <p className="text-red-400 font-semibold">
              ❌ Message not sent. Try again.
            </p>
          )}

          {/* SUBMIT BUTTON */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
            type="submit"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </section>
  );
}

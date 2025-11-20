"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("idle");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formsubmit.co/ajax/akki18159@gmail.com", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success === "true") {
        setStatus("success");
        e.target.reset(); // clear form
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="py-20 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#0f0f0f] p-6 rounded-xl shadow-lg"
        >
          {/* Hidden FormSubmit inputs */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_subject"
            value="New Contact Message from Portfolio"
          />

          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white"
            ></textarea>
          </div>

          {/* SUCCESS MESSAGE */}
          {status === "success" && (
            <p className="text-green-400 text-center font-semibold">
              ✔ Your message has been sent successfully!
            </p>
          )}

          {/* ERROR MESSAGE */}
          {status === "error" && (
            <p className="text-red-500 text-center font-semibold">
              ❌ Message didn't send — try again!
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
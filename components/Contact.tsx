"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Socials } from "./Socials";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-8 md:px-12 lg:px-32 py-16 mb-20 md:mb-32">
      <motion.h2
        className="text-sz-sect text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-medium mb-6 text-[#9aa1c7]">
            Connect with me
          </h3>
          <p className="text-lg tracking-wide mb-12">
            I&apos;m always open to new opportunities and collaborations. To
            discuss a project or simply network, please feel free to connect
            with me.
          </p>

          <Socials />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-medium mb-6 text-[#9aa1c7]">
            Send me a message
          </h3>
          <form ref={formRef} onSubmit={handleSubmit}>
            <label className="block text-base mb-1">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              required
              className="block w-full bg-[#020a3a] text-[#c6c4cc] placeholder:text-[#d3d3d3] placeholder:italic placeholder:opacity-70 px-4 py-5 mb-8 focus:outline-[1px] focus:outline-[#c6c4cc]"
            />
            <label className="block text-base mb-1">Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              required
              className="block w-full bg-[#020a3a] text-[#c6c4cc] placeholder:text-[#d3d3d3] placeholder:italic placeholder:opacity-70 px-4 py-5 mb-8 focus:outline-[1px] focus:outline-[#c6c4cc]"
            />
            <label className="block text-base mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              required
              rows={5}
              className="block w-full bg-[#020a3a] text-[#c6c4cc] placeholder:text-[#d3d3d3] placeholder:italic placeholder:opacity-70 px-4 py-5 mb-8 focus:outline-[1px] focus:outline-[#c6c4cc] resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full text-white text-base py-5 cursor-pointer transition-transform duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ background: "var(--btn-primary)" }}
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-[#82edf9] text-sm mt-4">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-4">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
// import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Socials } from "../ui/Socials";
import { ContactAddress } from "../ui/ContactAddress";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.SyntheticEvent) => {
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
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="px-8 md:px-12 lg:px-32 py-16 mb-20 md:mb-32"
    >
      <h2 className="text-sz-sect text-center mb-20">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-primary text-sz-subsect font-medium mb-6">
            Connect with me
          </h3>
          <p className="text-sz-md tracking-wide mb-6">
            I&apos;m always open to new opportunities and collaborations. To
            discuss a project or simply network, please feel free to connect
            with me.
          </p>
          
          <ContactAddress />

          <Socials />
        </div>

        <div>
          <h3 className="text-primary text-sz-subsect font-medium mb-6">
            Send me a message
          </h3>
          <form ref={formRef} onSubmit={handleSubmit}>
            <label className="block text-base mb-1">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              required
              className="block w-full bg-primary/10 placeholder:italic placeholder:opacity-80 px-6 py-4 mb-8 focus:outline-2 focus:outline-primary-light"
            />
            <label className="block text-base mb-1">Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              required
              className="block w-full bg-primary/10 placeholder:italic placeholder:opacity-80 px-6 py-4 mb-8 focus:outline-2 focus:outline-primary-light"
            />
            <label className="block text-base mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              required
              rows={5}
              className="block w-full bg-primary/10 placeholder:italic placeholder:opacity-80 px-6 py-4 mb-8 focus:outline-2 focus:outline-primary-light"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full btn-gradient text-card text-base font-semibold py-4 cursor-pointer transition-transform duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-green-600 text-sm mt-4">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm mt-4">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SectionShell } from "./SectionShell";
import { Socials } from "../ui/Socials";
import { InputField, MessageField } from "../ui/ContactField";
import { ContactAddress } from "../ui/ContactAddress";
import { Send } from "lucide-react";

export const Contact = () => {
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
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionShell id="contact" header="Reach Out">
      <div
        id="contact"
        className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-28"
      >
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
            <InputField
              label={"Name"}
              type={"text"}
              name={"from_name"}
              placeholder={"Enter your name"}
            />
            <InputField
              label={"Email"}
              type={"email"}
              name={"from_email"}
              placeholder={"Enter your email"}
            />
            <MessageField
              label={"Message"}
              name={"message"}
              placeholder={"Write your message here..."}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex justify-center items-center gap-4 btn-gradient text-card text-base font-semibold rounded-xl py-4 cursor-pointer transition-transform duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send message"}
              <Send className="size-4.5" />
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
    </SectionShell>
  );
}

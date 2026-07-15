"use client";

import { FormEvent, useState } from "react";
import { whatsappUrl } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const composed = [
      "Hello NORDBLADE,",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      message,
    ].join("\n");

    window.open(whatsappUrl(composed), "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "w-full rounded-md border border-gold/25 bg-bg/60 px-3 py-2.5 text-sm text-text placeholder:text-muted/70 focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="flex h-full flex-col gap-3">
      <h3 className="font-display text-sm tracking-[0.18em] text-gold uppercase">
        Send Us a Message
      </h3>
      <label className="sr-only" htmlFor="name">
        Your Name
      </label>
      <input
        id="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className={fieldClass}
      />
      <label className="sr-only" htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className={fieldClass}
      />
      <label className="sr-only" htmlFor="subject">
        Subject
      </label>
      <input
        id="subject"
        required
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        className={fieldClass}
      />
      <label className="sr-only" htmlFor="message">
        Your Message
      </label>
      <textarea
        id="message"
        required
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
        className={`${fieldClass} resize-none`}
      />
      <button
        type="submit"
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 font-display text-sm tracking-[0.12em] text-bg uppercase transition-colors hover:bg-gold-soft"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.82c0 2.08.55 4.11 1.6 5.9L0 24l6.45-1.69a11.8 11.8 0 0 0 5.59 1.42h.01c6.54 0 11.84-5.3 11.84-11.82 0-3.16-1.23-6.13-3.37-8.43Z" />
        </svg>
        Chat on WhatsApp
      </button>
    </form>
  );
}

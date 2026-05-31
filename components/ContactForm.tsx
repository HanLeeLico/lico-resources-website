"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server responded with " + res.status);
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="card rounded-2xl p-10 text-center">
        <div className="mono accent text-xs tracking-widest mb-3">RECEIVED</div>
        <h3 className="text-2xl font-bold mb-3">Thanks — we'll be in touch.</h3>
        <p className="text-black/55">We respond to every enquiry within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card rounded-2xl p-8 md:p-10 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="mono accent text-xs tracking-widest block mb-2">YOUR NAME</label>
          <input
            id="name" name="name" required
            className="w-full bg-transparent border border-black/15 focus:border-[color:var(--accent)] outline-none rounded-md px-4 py-3 transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="mono accent text-xs tracking-widest block mb-2">EMAIL</label>
          <input
            id="email" name="email" type="email" required
            className="w-full bg-transparent border border-black/15 focus:border-[color:var(--accent)] outline-none rounded-md px-4 py-3 transition"
          />
        </div>
        <div>
          <label htmlFor="company" className="mono accent text-xs tracking-widest block mb-2">COMPANY</label>
          <input
            id="company" name="company"
            className="w-full bg-transparent border border-black/15 focus:border-[color:var(--accent)] outline-none rounded-md px-4 py-3 transition"
          />
        </div>
        <div>
          <label htmlFor="enquiry" className="mono accent text-xs tracking-widest block mb-2">ENQUIRY TYPE</label>
          <select
            id="enquiry" name="enquiry" defaultValue=""
            className="w-full bg-transparent border border-black/15 focus:border-[color:var(--accent)] outline-none rounded-md px-4 py-3 transition"
          >
            <option value="" disabled>Choose one</option>
            <option value="hire">Hire talent</option>
            <option value="candidate">I'm a candidate</option>
            <option value="contract">Contract / interim engagement</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mono accent text-xs tracking-widest block mb-2">TELL US MORE</label>
        <textarea
          id="message" name="message" rows={5} required
          className="w-full bg-transparent border border-black/15 focus:border-[color:var(--accent)] outline-none rounded-md px-4 py-3 transition resize-y"
        />
      </div>

      {/* Honeypot — hidden from real users. Bots fill it; the server discards. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}>
        <label>Website (leave blank)<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      {status === "error" && (
        <div className="text-sm text-[color:var(--accent)]">
          Couldn't send right now — {error}. Please email <a href="mailto:info@licoresources.com" className="underline">info@licoresources.com</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary px-6 py-3.5 rounded-md font-semibold inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}

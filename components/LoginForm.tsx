"use client";

import { useState, FormEvent } from "react";

// =============================================================
// Contractor portal login form — UI scaffold only.
//
// To wire authentication, replace handleSubmit's TODO with a call
// to your auth provider:
//
//   • NextAuth.js  →  signIn("credentials", { email, password })
//   • Auth.js      →  same
//   • Clerk        →  useSignIn().create({ identifier, password })
//   • Supabase     →  supabase.auth.signInWithPassword({ email, password })
//   • Custom API   →  fetch("/api/portal/login", { method: "POST", body: ... })
// =============================================================

type Status = "idle" | "submitting" | "error";

export default function LoginForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    // TODO: wire to your auth provider (see comment above).
    // For now: simulate a failed login so the user can see the error UX.
    await new Promise((r) => setTimeout(r, 500));
    setStatus("error");
    setError(
      `Authentication not configured yet. Email: ${email.replace(/(.).+(@.+)/, "$1***$2")}. Wire your auth provider in components/LoginForm.tsx.`
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="email" className="mono accent text-xs tracking-widest block mb-2">EMAIL</label>
        <input
          id="email" name="email" type="email" required autoComplete="username"
          placeholder="you@company.com"
          className="w-full bg-transparent border border-black/15 focus:border-[color:var(--accent)] outline-none rounded-md px-4 py-3 transition"
        />
      </div>

      <div>
        <div className="flex justify-between items-baseline mb-2">
          <label htmlFor="password" className="mono accent text-xs tracking-widest">PASSWORD</label>
          <a href="/portal/forgot-password" className="mono accent text-xs hover:underline">FORGOT?</a>
        </div>
        <input
          id="password" name="password" type="password" required autoComplete="current-password"
          placeholder="••••••••"
          className="w-full bg-transparent border border-black/15 focus:border-[color:var(--accent)] outline-none rounded-md px-4 py-3 transition"
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-black/65">
        <input type="checkbox" name="remember" className="w-4 h-4 accent-[color:var(--accent)]" />
        <span>Keep me signed in on this device</span>
      </label>

      {status === "error" && (
        <div className="text-sm text-[color:var(--accent)] bg-[color:var(--accent-soft)] rounded-md p-3 border border-[color:var(--accent)]/20">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full px-6 py-3.5 rounded-md font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Signing in…" : "Sign In →"}
      </button>
    </form>
  );
}

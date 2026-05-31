import { NextResponse } from "next/server";

// =============================================================
// Contact form endpoint
// =============================================================
// Reads form fields, applies a honeypot check + simple in-memory
// rate limit, and (if RESEND_API_KEY is set) delivers a real email.
// Always returns ok:true to the client even when the underlying
// send fails — to avoid leaking provider state to abusers.

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@licoresources.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "enquiries@licoresources.com";

// In-memory rate limiter (per-IP). Replace with Upstash for multi-instance.
const recentByIp = new Map<string, number[]>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entries = (recentByIp.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  entries.push(now);
  recentByIp.set(ip, entries);
  return entries.length > MAX_REQUESTS;
}

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  enquiry?: string;
  message?: string;
  // Honeypot — should always be empty
  website?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }

    const body = (await request.json()) as Payload;

    // Honeypot: if the hidden "website" field has content, drop silently.
    if (body.website && body.website.length > 0) {
      return NextResponse.json({ ok: true }); // pretend success
    }

    // Basic validation
    const name = (body.name ?? "").trim().slice(0, 200);
    const email = (body.email ?? "").trim().slice(0, 200);
    const company = (body.company ?? "").trim().slice(0, 200);
    const enquiry = (body.enquiry ?? "").trim().slice(0, 100);
    const message = (body.message ?? "").trim().slice(0, 4000);

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    const subject = `New enquiry — ${enquiry || "general"}`;
    const html = `
      <h2 style="font-family:Arial,sans-serif">New enquiry from the Lico website</h2>
      <table style="font-family:Arial,sans-serif;border-collapse:collapse">
        <tr><td style="padding:6px 12px"><b>Name</b></td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 12px"><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding:6px 12px"><b>Company</b></td><td>${escapeHtml(company)}</td></tr>
        <tr><td style="padding:6px 12px"><b>Enquiry</b></td><td>${escapeHtml(enquiry)}</td></tr>
      </table>
      <h3 style="font-family:Arial,sans-serif">Message</h3>
      <p style="font-family:Arial,sans-serif;white-space:pre-wrap">${escapeHtml(message)}</p>
      <hr>
      <p style="font-family:Arial,sans-serif;font-size:12px;color:#888">IP: ${escapeHtml(ip)}</p>
    `;

    if (RESEND_API_KEY) {
      // Send via Resend HTTP API (no SDK needed).
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: TO_EMAIL,
          reply_to: email,
          subject,
          html,
        }),
      });
      if (!res.ok) {
        // eslint-disable-next-line no-console
        console.error("[contact] Resend send failed:", res.status, await res.text());
      }
    } else {
      // No API key yet — just log so the dev can see the payload.
      // eslint-disable-next-line no-console
      console.log("[contact] (RESEND_API_KEY not set, logging only):", { name, email, company, enquiry, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[contact] error:", err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description:
    "A specialist cybersecurity and technology GRC recruitment firm. Singapore-based. Founded 2013. Regional reach across APAC and the Middle East.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Lico Resources",
    description: "Specialist cybersecurity and tech GRC recruitment. Singapore-based. Founded 2013.",
    url: "/about",
    type: "website",
  },
};

const credentials = [
  { label: "EA Licence", value: "13C6733" },
  { label: "UEN", value: "201322494Z" },
  { label: "Founded", value: "2013" },
  { label: "HQ", value: "Singapore" },
];

export default function About() {
  return (
    <main>
      <Nav />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-16">
        <div className="tag mono mb-4">ABOUT</div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
          A specialist firm. <span className="accent">Built on focus.</span>
        </h1>
        <p className="text-black/65 text-lg md:text-xl max-w-3xl leading-relaxed">
          Lico Resources is a specialist recruitment firm. We work exclusively on cybersecurity and technology Governance, Risk &amp; Compliance roles — and nothing else. Founded in 2013 and headquartered in Singapore, we serve clients across Asia Pacific and the Middle East.
        </p>
      </section>

      {/* THE FOCUS NARRATIVE */}
      <section className="bg-[#F4F1ED] border-y border-black/10">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="tag mono mb-4">WHY SPECIALISATION</div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                Less is more. <span className="accent">Specialisation matters.</span>
              </h2>
              <p className="text-black/70 leading-relaxed mb-4">
                Generalist recruiters cover dozens of industries. They send senior engineers when you asked for a Head of Audit. They confuse a vCISO with a SOC manager. They ghost candidates who don't fit a brief they didn't fully understand.
              </p>
              <p className="text-black/70 leading-relaxed">
                We chose a different path. We recruit only in cybersecurity and technology GRC — risk, audit, compliance, governance — across permanent and contract engagements. That focus is the whole point.
              </p>
            </div>
            <div className="space-y-6">
              <div className="card rounded-2xl p-7">
                <div className="mono accent text-xs mb-3">DOMAIN DEPTH</div>
                <div className="text-lg font-bold mb-2">We know the difference</div>
                <div className="text-black/55 text-sm leading-relaxed">
                  Between a security architect and a security engineer. Between MAS TRM and ISO 27001. Between offensive and defensive roles. We brief on technical detail, not buzzwords.
                </div>
              </div>
              <div className="card rounded-2xl p-7">
                <div className="mono accent text-xs mb-3">QUIET BY DEFAULT</div>
                <div className="text-lg font-bold mb-2">Confidential, every time</div>
                <div className="text-black/55 text-sm leading-relaxed">
                  Candidates move discreetly. Clients brief us on roles that haven't been posted. Confidentiality is the default setting — no exceptions.
                </div>
              </div>
              <div className="card rounded-2xl p-7">
                <div className="mono accent text-xs mb-3">DIRECT ENGAGEMENT</div>
                <div className="text-lg font-bold mb-2">No junior gatekeepers</div>
                <div className="text-black/55 text-sm leading-relaxed">
                  Every brief goes through someone who has worked in the domain for over a decade. No first-round triage by inexperienced staff who don't know the role.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 border-t border-black/10 pt-10">
          <div>
            <div className="stat-num text-5xl md:text-6xl font-black">500<span className="accent">+</span></div>
            <div className="mono text-xs text-black/50 mt-2 tracking-wider">PROFESSIONALS PLACED</div>
          </div>
          <div>
            <div className="stat-num text-5xl md:text-6xl font-black">78<span className="accent">+</span></div>
            <div className="mono text-xs text-black/50 mt-2 tracking-wider">COMPANIES PARTNERED</div>
          </div>
          <div>
            <div className="stat-num text-5xl md:text-6xl font-black">13</div>
            <div className="mono text-xs text-black/50 mt-2 tracking-wider">YEARS EXPERIENCE</div>
          </div>
          <div>
            <div className="stat-num text-5xl md:text-6xl font-black">9</div>
            <div className="mono text-xs text-black/50 mt-2 tracking-wider">COUNTRIES SERVED</div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS / REGULATED */}
      <section className="bg-[#F4F1ED] border-y border-black/10">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="tag mono mb-4">REGULATED &amp; CREDENTIALED</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 max-w-3xl">
            Licensed in Singapore. <span className="accent">Operating across the region.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {credentials.map((c) => (
              <div key={c.label} className="card rounded-xl p-6">
                <div className="mono accent text-xs mb-2 tracking-widest">{c.label}</div>
                <div className="text-xl font-bold">{c.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-8 py-24 text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Ready to brief us, or to be represented?
        </h3>
        <p className="text-black/55 mb-8">We move within 48 hours.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/contact" className="btn-primary px-6 py-3.5 rounded-md font-semibold inline-flex items-center gap-2">
            Get in Touch <span>→</span>
          </a>
          <a href="/services" className="btn-ghost px-6 py-3.5 rounded-md font-semibold">Our Services</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

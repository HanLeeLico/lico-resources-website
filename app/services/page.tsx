import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services",
  description:
    "Executive search, talent acquisition, contract staffing, and RPO solutions for cybersecurity and technology GRC.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Lico Resources",
    description: "Executive search, talent acquisition, contract staffing, RPO. Cybersecurity & tech GRC.",
    url: "/services",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Executive Search",
    summary: "Senior-level cybersecurity and GRC leadership.",
    body: "CISO, Head of Security, Head of IT Audit, Head of Tech Risk, BISO, VP-level information security. Confidential retained search for roles where domain depth and cultural fit both matter — and where the wrong hire costs the business months.",
    bullets: ["C-suite and Board-facing placements", "Confidential retained mandates", "Leadership assessment and reference work"],
  },
  {
    number: "02",
    title: "Talent Acquisition",
    summary: "Comprehensive recruitment across all levels.",
    body: "Mid- and senior-individual contributors, team leads, managers. End-to-end recruitment with curated shortlists, structured feedback, and offer management. The same domain focus as executive search, scaled across volume hiring needs.",
    bullets: ["End-to-end recruitment delivery", "Market mapping and benchmarking", "Talent pipelining for repeat hires"],
  },
  {
    number: "03",
    title: "Contract Staffing",
    summary: "Flexible engagements for project-based needs.",
    body: "vCISOs, interim Heads of Risk or Audit, project-based pen-test crews, cloud-security SMEs for regulatory uplifts. Day-rate or fixed-scope arrangements through Lico's contractor framework. See the contractor page for portal access.",
    bullets: ["Interim leadership engagements", "Fixed-scope project crews", "Day-rate or milestone billing"],
  },
  {
    number: "04",
    title: "RPO Solutions",
    summary: "Recruitment Process Outsourcing at scale.",
    body: "For organisations building entire cybersecurity or GRC functions — new SOC stand-ups, regional GRC teams, post-acquisition integration. We embed into your hiring process for a fixed term and deliver against an agreed plan.",
    bullets: ["Embedded recruiter model", "Fixed-term programme delivery", "Process and pipeline optimisation"],
  },
];

export default function Services() {
  return (
    <main>
      <Nav />

      <section className="max-w-7xl mx-auto px-8 pt-16 pb-16">
        <div className="tag mono mb-4">SERVICES</div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
          Four ways to engage. <span className="accent">One focus.</span>
        </h1>
        <p className="text-black/65 text-lg md:text-xl max-w-3xl leading-relaxed">
          Whatever shape the engagement takes, every Lico mandate sits inside cybersecurity or technology Governance, Risk &amp; Compliance.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-24 space-y-6">
        {services.map((s) => (
          <article key={s.number} className="card rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3">
                <div className="mono accent text-sm tracking-widest mb-2">SERVICE {s.number}</div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">{s.title}</h3>
              </div>
              <div className="md:col-span-9">
                <p className="text-lg font-semibold text-black/80 mb-3">{s.summary}</p>
                <p className="text-black/60 leading-relaxed mb-6">{s.body}</p>
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-black/70">
                      <span className="mono accent text-xs mt-1.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#F4F1ED] border-y border-black/10">
        <div className="max-w-7xl mx-auto px-8 py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Tell us what you need to hire.
          </h3>
          <p className="text-black/55 mb-8">We respond to every enquiry within 48 hours.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/contact" className="btn-primary px-6 py-3.5 rounded-md font-semibold inline-flex items-center gap-2">
              Start a Brief <span>→</span>
            </a>
            <a href="/contractors" className="btn-ghost px-6 py-3.5 rounded-md font-semibold">Contractor Portal</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

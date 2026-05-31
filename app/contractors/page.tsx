import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contractors",
  description:
    "Contractor capability: interim CISOs, vCISOs, tech risk leads, IT audit specialists, cloud security SMEs, pen-test crews.",
  alternates: { canonical: "/contractors" },
  openGraph: {
    title: "Contractors — Lico Resources",
    description: "Interim CISO, tech risk, IT audit, cloud security SMEs. Contract & project engagements.",
    url: "/contractors",
    type: "website",
  },
};

const engagements = [
  { title: "Interim CISO / vCISO", body: "3–12 months. Singapore or remote. Board-facing leadership during gaps or transitions.", tag: "ON REQUEST" },
  { title: "Tech Risk Project Lead", body: "MAS TRM uplift, second-line build-out, third-party risk programme launch.", tag: "ON REQUEST" },
  { title: "IT Audit Specialist", body: "Internal audit support, SOX IT controls, regulatory audit prep — full-time or fractional.", tag: "ON REQUEST" },
  { title: "Cloud Security SME", body: "AWS / Azure / GCP architecture review, CSPM rollout, container security uplift.", tag: "ON REQUEST" },
  { title: "Pen Test Crew", body: "Fixed-scope penetration testing, red team exercises, application security assessments.", tag: "PROJECT" },
  { title: "GRC Programme Manager", body: "ISO 27001 / NIST CSF / SOC 2 readiness and certification programme delivery.", tag: "ON REQUEST" },
];

export default function ContractorsPage() {
  return (
    <main>
      <Nav />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <div className="tag mono mb-4">CONTRACTORS</div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
          Permanent isn't the only answer. <span className="accent">We contract too.</span>
        </h1>
        <p className="text-black/65 text-lg md:text-xl max-w-3xl leading-relaxed">
          We place contract, interim, and project-based talent across the same cybersecurity and technology GRC specialisations as our permanent search work. Same domain depth, faster mobilisation.
        </p>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-[#F4F1ED] border-y border-black/10">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card rounded-2xl p-7">
              <div className="mono accent text-xs mb-3">USE CASE 01</div>
              <div className="text-lg font-bold mb-2">Coverage during a gap</div>
              <div className="text-black/55 text-sm leading-relaxed">
                CISO has left, search underway, board needs continuity. We mobilise an interim within two weeks.
              </div>
            </div>
            <div className="card rounded-2xl p-7">
              <div className="mono accent text-xs mb-3">USE CASE 02</div>
              <div className="text-lg font-bold mb-2">Project burst</div>
              <div className="text-black/55 text-sm leading-relaxed">
                Regulatory deadline, audit backlog, MAS TRM uplift — short-term capacity with the right skills, not the wrong generalists.
              </div>
            </div>
            <div className="card rounded-2xl p-7">
              <div className="mono accent text-xs mb-3">USE CASE 03</div>
              <div className="text-lg font-bold mb-2">Specialist scope</div>
              <div className="text-black/55 text-sm leading-relaxed">
                Pen test, cloud-posture review, SOC 2 readiness. Fixed-scope, fixed-price, delivered by people who do this every week.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPICAL ENGAGEMENTS */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="tag mono mb-4">TYPICAL ENGAGEMENTS</div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 max-w-3xl">
          What we typically place. <span className="accent">Pricing on request.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {engagements.map((e) => (
            <div key={e.title} className="card rounded-2xl p-7">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="text-lg font-bold">{e.title}</div>
                <div className="mono accent text-xs flex-shrink-0 mt-1">{e.tag}</div>
              </div>
              <div className="text-black/55 text-sm leading-relaxed">{e.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTAL ACCESS */}
      <section className="bg-[#F4F1ED] border-y border-black/10">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="tag mono mb-4">EXISTING CONTRACTORS</div>
              <h3 className="text-3xl font-extrabold tracking-tight mb-4">Contractor Portal Login</h3>
              <p className="text-black/65 leading-relaxed mb-8">
                Existing Lico contractors can access timesheets, invoices, and engagement details through the contractor portal.
              </p>
              <a href="/portal/login" className="btn-primary px-6 py-3.5 rounded-md font-semibold inline-flex items-center gap-2">
                Go to Portal <span>→</span>
              </a>
            </div>
            <div>
              <div className="tag mono mb-4">NEW TO LICO</div>
              <h3 className="text-3xl font-extrabold tracking-tight mb-4">Engage Us</h3>
              <p className="text-black/65 leading-relaxed mb-8">
                Looking for contract capability for your team, or open to contract roles yourself? Brief us on what you need.
              </p>
              <a href="/contact" className="btn-ghost px-6 py-3.5 rounded-md font-semibold inline-flex items-center gap-2">
                Contact Us <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import { FaqJsonLd, ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cybersecurity Recruitment Services in Singapore",
  description:
    "Executive search, talent acquisition, contract staffing, and RPO for cybersecurity, CISO, tech risk, IT audit, and GRC roles across Singapore, APAC, and the Middle East.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Cybersecurity & Tech GRC Recruitment Services — Lico Resources",
    description: "Executive search, talent acquisition, contract staffing, RPO. Cybersecurity, CISO, tech risk, IT audit, MAS TRM, cloud security.",
    url: "/services",
    type: "website",
    images: [{ url: "/og-services.png", width: 1200, height: 630, alt: "Lico Resources Services" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-services.png"] },
};

const faqs = [
  {
    question: "What types of cybersecurity roles does Lico Resources recruit for?",
    answer:
      "We recruit across the entire cybersecurity stack — CISO and Head of Security leadership, security architects, cloud security engineers, application security and DevSecOps, SOC managers, incident response leads, threat intelligence, red and purple team specialists, and penetration testers. We don't take generalist briefs outside cybersecurity or technology GRC.",
  },
  {
    question: "Do you cover technology Governance, Risk & Compliance (GRC) roles too?",
    answer:
      "Yes. Technology GRC is one of our two primary domains alongside cybersecurity. That includes Heads of IT Audit and internal tech auditors, technology and operational risk managers, MAS TRM specialists, ISO 27001 / NIST CSF / SOC 2 programme owners, third-party risk, data privacy (DPO, PDPA, GDPR), and compliance leads.",
  },
  {
    question: "Which regions do you operate in?",
    answer:
      "Singapore is our headquarters and the majority of our placements are there. We also actively work across Asia Pacific (Hong Kong, Malaysia, Indonesia, the Philippines, Australia) and the Middle East (UAE, Saudi Arabia, Qatar). Many of our roles are regional with Singapore as the hub.",
  },
  {
    question: "How long does a typical search take?",
    answer:
      "For a Head of Security or CISO role, six to ten weeks from kick-off to offer accepted is typical. Mid-level individual contributor searches run faster — usually four to six weeks. We can mobilise contract or interim engagements within one to two weeks when timelines are tight.",
  },
  {
    question: "Do you place interim CISOs and contract specialists?",
    answer:
      "Yes. Interim CISO, vCISO, tech risk leads, IT audit specialists, cloud security SMEs for regulatory uplifts, and pen-test crews on fixed scopes are all part of our contractor practice. Day-rate or fixed-price engagements through Lico's contractor framework.",
  },
  {
    question: "Are you licensed to recruit in Singapore?",
    answer:
      "Yes. Lico Resources Pte Ltd holds Singapore Employment Agency Licence 13C6733 and operates under UEN 201322494Z. We are fully compliant with the Employment Agencies Act and the Personal Data Protection Act (PDPA).",
  },
  {
    question: "How does your fee structure work?",
    answer:
      "For permanent placements we work on a contingency or retained basis depending on role seniority and confidentiality. Contract engagements are typically day-rate. We discuss commercials transparently at the briefing stage — pricing on request.",
  },
  {
    question: "Will my search be kept confidential?",
    answer:
      "Yes, by default. Many of our mandates are confidential because the role hasn't been announced or because we're replacing an incumbent. Candidate searches are equally discreet — we don't broadcast names or current employers without explicit consent.",
  },
];

const servicesForSchema = [
  { name: "Executive Search", description: "Senior-level cybersecurity and GRC leadership search. CISO, Head of Security, Head of IT Audit, Head of Tech Risk, BISO, VP-level information security.", url: "/services", category: "Executive Search" },
  { name: "Talent Acquisition", description: "Comprehensive recruitment across mid- and senior-level cybersecurity and technology GRC roles.", url: "/services", category: "Recruitment" },
  { name: "Contract Staffing", description: "Interim CISO, vCISO, tech risk leads, IT audit specialists, cloud security SMEs, pen-test crews.", url: "/contractors", category: "Contract Staffing" },
  { name: "RPO Solutions", description: "Recruitment Process Outsourcing for organisations building or scaling cybersecurity and GRC functions.", url: "/services", category: "Recruitment Process Outsourcing" },
];

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

      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
      <FaqJsonLd qa={faqs} />
      {servicesForSchema.map((s) => <ServiceJsonLd key={s.name} {...s} />)}

      <section className="max-w-7xl mx-auto px-8 pt-16 pb-16">
        <div className="tag mono mb-4">SERVICES</div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
          Cybersecurity &amp; tech GRC recruitment.{" "}
          <span className="accent">Four ways to engage.</span>
        </h1>
        <p className="text-black/65 text-lg md:text-xl max-w-3xl leading-relaxed">
          Executive search, talent acquisition, contract staffing, and RPO — every Lico mandate sits inside cybersecurity or technology Governance, Risk &amp; Compliance. We work across Singapore, APAC, and the Middle East.
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

      <FaqSection eyebrow="FREQUENTLY ASKED" title="Common questions, answered." items={faqs} />

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-8 py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Tell us what you need to hire.
          </h3>
          <p className="text-black/55 mb-8">We respond to every enquiry within 48 hours.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/contact" className="btn-primary px-6 py-3.5 rounded-md font-semibold inline-flex items-center gap-2">
              Start a cybersecurity recruitment brief <span>→</span>
            </a>
            <a href="/contractors" className="btn-ghost px-6 py-3.5 rounded-md font-semibold">Explore contractor engagements</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

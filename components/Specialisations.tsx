"use client";

import { MouseEvent } from "react";

type Card = { tag: string; title: string; body: string };

const cyber: Card[] = [
  { tag: "01 / LEADERSHIP", title: "CISO & Security Leadership", body: "CISOs, Heads of Security, BISOs, VPs of Information Security. Board-facing roles where domain depth matters." },
  { tag: "02 / CLOUD & APPSEC", title: "Cloud Security, AppSec & DevSecOps", body: "AWS / Azure / GCP security architects, application security engineers, secure SDLC, container and Kubernetes security." },
  { tag: "03 / OPERATIONS", title: "SOC, IR, Threat Intel & Red Team", body: "SOC managers, incident response leads, threat hunters, red and purple team specialists, penetration testers." },
];

const grc: Card[] = [
  { tag: "04 / GOVERNANCE", title: "IT Governance & Programme Leadership", body: "Heads of IT Governance, ISO 27001 / NIST programme owners, technology PMO leaders, framework and policy ownership." },
  { tag: "05 / RISK", title: "Technology & Operational Risk", body: "Heads of Tech Risk, second-line oversight, MAS TRM specialists, operational resilience, third-party risk managers." },
  { tag: "06 / AUDIT & COMPLIANCE", title: "Technology Audit & Compliance", body: "Heads of IT Audit, internal tech auditors, SOX IT controls, IT compliance leads, DPOs, PDPA / GDPR specialists." },
];

function CardEl({ c }: { c: Card }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--mx", `${e.nativeEvent.offsetX}px`);
    e.currentTarget.style.setProperty("--my", `${e.nativeEvent.offsetY}px`);
  };
  return (
    <div className="card rounded-2xl p-7" onMouseMove={onMove}>
      <div className="mono accent text-xs mb-4">{c.tag}</div>
      <div className="text-xl font-bold mb-2 tracking-tight">{c.title}</div>
      <div className="text-black/55 text-sm leading-relaxed">{c.body}</div>
    </div>
  );
}

export default function Specialisations() {
  return (
    <section className="bg-[#F4F1ED] border-y border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="tag mono mb-4">WHAT WE RECRUIT FOR</div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-3xl">
          Two domains. <span className="accent">Both deep.</span>
        </h2>
        <p className="text-black/55 max-w-2xl mb-12">
          Cybersecurity on one side. Technology Governance, Risk &amp; Compliance on the other. We don't recruit outside these lanes — and that focus is the whole point.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full accent-bg" />
            <span className="mono text-xs tracking-widest accent">CYBERSECURITY</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full accent-bg" />
            <span className="mono text-xs tracking-widest accent">TECHNOLOGY GRC</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">{cyber.map((c) => <CardEl key={c.title} c={c} />)}</div>
          <div className="space-y-4">{grc.map((c) => <CardEl key={c.title} c={c} />)}</div>
        </div>
      </div>
    </section>
  );
}

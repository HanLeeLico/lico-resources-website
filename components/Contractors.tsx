"use client";

import { MouseEvent } from "react";

const engagements = [
  { title: "Interim CISO", body: "3–12 months · Singapore / Remote", tag: "ON REQUEST" },
  { title: "Tech Risk / Audit Lead", body: "6 months · MAS TRM uplift", tag: "ON REQUEST" },
  { title: "Pen Test Crew", body: "Fixed scope · 2–6 weeks", tag: "ON REQUEST" },
  { title: "Cloud Security SME", body: "3–9 months · AWS / Azure", tag: "ON REQUEST" },
];

export default function Contractors() {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--mx", `${e.nativeEvent.offsetX}px`);
    e.currentTarget.style.setProperty("--my", `${e.nativeEvent.offsetY}px`);
  };
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="tag mono mb-4">CONTRACTOR CAPABILITY</div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Permanent isn't the only answer. <span className="accent">We contract too.</span>
          </h2>
          <p className="text-black/55 text-lg leading-relaxed mb-8">
            Need a vCISO for six months? An IT auditor to clear a backlog? A pen-test crew for a single engagement? We place contract and consulting talent across the same cybersecurity and technology GRC specialisations.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="/portal/login" className="btn-primary px-6 py-3.5 rounded-md font-semibold inline-flex items-center gap-2">
              Contractor Portal <span>→</span>
            </a>
            <a href="/contact" className="btn-ghost px-6 py-3.5 rounded-md font-semibold">Engage Us</a>
          </div>
        </div>

        <div className="card rounded-2xl p-8" onMouseMove={onMove}>
          <div className="mono accent text-xs mb-6">TYPICAL ENGAGEMENTS</div>
          <div className="space-y-5">
            {engagements.map((e, i) => (
              <div key={i} className={`flex justify-between items-start gap-4 ${i < engagements.length - 1 ? "pb-5 border-b border-black/10" : ""}`}>
                <div>
                  <div className="font-semibold">{e.title}</div>
                  <div className="text-black/45 text-sm">{e.body}</div>
                </div>
                <div className="mono accent text-sm">{e.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

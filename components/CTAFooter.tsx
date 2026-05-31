"use client";

import { MouseEvent } from "react";

export default function CTAFooter() {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--mx", `${e.nativeEvent.offsetX}px`);
    e.currentTarget.style.setProperty("--my", `${e.nativeEvent.offsetY}px`);
  };
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="glow glow-red-1" style={{ opacity: 0.2 }} />
      <div className="relative max-w-7xl mx-auto px-8 py-28">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card rounded-2xl p-10" onMouseMove={onMove}>
            <div className="mono accent text-xs mb-4">FOR EMPLOYERS</div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight">Hiring?</h3>
            <p className="text-black/55 mb-8 leading-relaxed">Brief us on the role, the team, the urgency. We'll come back within 48 hours with a search plan.</p>
            <a href="/contact" className="btn-primary px-6 py-3.5 rounded-md font-semibold inline-flex items-center gap-2">
              Start a Search <span>→</span>
            </a>
          </div>

          <div className="card rounded-2xl p-10" onMouseMove={onMove}>
            <div className="mono accent text-xs mb-4">FOR CANDIDATES</div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight">Looking?</h3>
            <p className="text-black/55 mb-8 leading-relaxed">Drop your CV and what you're open to. We move quietly — your current employer won't hear from us.</p>
            <a href="/contact" className="btn-ghost px-6 py-3.5 rounded-md font-semibold">Submit CV →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

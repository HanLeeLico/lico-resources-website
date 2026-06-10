"use client";

import { useState } from "react";

type QA = { question: string; answer: string };

export default function FaqSection({ items, title, eyebrow }: { items: QA[]; title?: string; eyebrow?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[#F4F1ED] border-y border-black/10">
      <div className="max-w-4xl mx-auto px-8 py-20">
        {eyebrow && <div className="tag mono mb-4">{eyebrow}</div>}
        {title && (
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-10">
            {title}
          </h2>
        )}
        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="card rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-7 py-5 flex justify-between items-center gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-lg pr-2">{it.question}</span>
                  <span className={`accent text-xl flex-shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                {isOpen && (
                  <div className="px-7 pb-6 text-black/65 leading-relaxed border-t border-black/10 pt-4">
                    {it.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

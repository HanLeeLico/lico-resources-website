"use client";

import { MouseEvent } from "react";

const posts = [
  { tag: "INDUSTRY INSIGHTS", read: "6 MIN READ", title: "The Future of Hiring: Degrees, AI, and Everything In Between", excerpt: "Degrees still matter — but everyone needs AI fluency now. It's becoming as fundamental as email..." },
  { tag: "MARKET PULSE", read: "4 MIN READ", title: "What CISO Comp Looks Like in Singapore Right Now", excerpt: "Base + bonus + equity benchmarks across banks, fintechs, and Big Tech APAC HQs..." },
  { tag: "CANDIDATE NOTE", read: "5 MIN READ", title: "Why Counter-Offers Almost Always Fail", excerpt: "The pattern I see every quarter: accept the counter, leave in nine months anyway. Here's why..." },
];

export default function Insights() {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--mx", `${e.nativeEvent.offsetX}px`);
    e.currentTarget.style.setProperty("--my", `${e.nativeEvent.offsetY}px`);
  };
  return (
    <section className="bg-[#F4F1ED] border-y border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <div className="tag mono mb-4">INSIGHTS</div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              From the <span className="accent">LinkedIn feed.</span>
            </h2>
          </div>
          <a href="/insights" className="mono text-sm accent hover:underline">VIEW ALL POSTS →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {posts.map((p, i) => (
            <article key={i} className="card rounded-2xl p-7" onMouseMove={onMove}>
              <div className="flex items-center gap-2 mono text-xs text-black/40 mb-5">
                <span>{p.tag}</span> <span className="accent">·</span> <span>{p.read}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 leading-snug">{p.title}</h3>
              <p className="text-black/55 text-sm leading-relaxed mb-6">{p.excerpt}</p>
              <a href="https://www.linkedin.com/company/lico-resources" target="_blank" rel="noopener" className="mono accent text-xs hover:underline">READ ON LINKEDIN →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

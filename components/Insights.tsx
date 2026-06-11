"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import { getRecentArticles } from "@/lib/articles";

const posts = getRecentArticles(3);

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
              From the <span className="accent">field.</span>
            </h2>
          </div>
          <Link href="/insights" className="mono text-sm accent hover:underline">VIEW ALL POSTS →</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {posts.map((p) => (
            <article key={p.slug} className="card rounded-2xl p-7 flex flex-col" onMouseMove={onMove}>
              <div className="flex items-center gap-2 mono text-xs text-black/40 mb-5">
                <span>{p.category}</span> <span className="accent">·</span> <span>{p.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 leading-snug">{p.title}</h3>
              <p className="text-black/55 text-sm leading-relaxed mb-6 flex-1">{p.cardExcerpt || p.excerpt}</p>
              <Link href={`/insights/${p.slug}`} className="mono accent text-xs hover:underline mt-auto">
                READ ARTICLE →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

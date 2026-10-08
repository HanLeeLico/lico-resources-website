import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/JsonLd";

type Item = { title: string; body: string };
type Quote = { quote: string; name: string; role: string };
type Cta = { label: string; href: string; ghost?: boolean };

export type NicheLandingProps = {
  path: string;
  breadcrumb: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  service: { name: string; description: string; category: string };
  listEyebrow: string;
  listTitle: string;
  list: string[];
  notes?: { label: string; body: string }[];
  whyEyebrow: string;
  whyTitle: string;
  why: Item[];
  process?: Item[];
  processLine?: string;
  extraLine?: { label: string; body: string; link?: { text: string; href: string } };
  quotes: Quote[];
  faqs?: { question: string; answer: string }[];
  ctaTitle: string;
  ctaLine?: string;
  ctas: Cta[];
};

export default function NicheLanding(p: NicheLandingProps) {
  return (
    <main>
      <Nav />
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: p.breadcrumb, href: p.path }]} />
      <ServiceJsonLd name={p.service.name} description={p.service.description} category={p.service.category} url={p.path} />
      {p.faqs && p.faqs.length > 0 && <FaqJsonLd qa={p.faqs} />}

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <div className="tag mono mb-4">{p.eyebrow}</div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl">
          {p.headline} <span className="accent">{p.headlineAccent}</span>
        </h1>
        <p className="text-black/65 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">{p.intro}</p>
        <div className="flex gap-4 flex-wrap">
          {p.ctas.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className={`${c.ghost ? "btn-ghost" : "btn-primary"} px-6 py-3.5 rounded-md font-semibold inline-flex items-center gap-2`}
            >
              {c.label} <span>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* LIST */}
      <section className="bg-[#F4F1ED] border-y border-black/10">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="tag mono mb-4">{p.listEyebrow}</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 max-w-3xl">{p.listTitle}</h2>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3">
            {p.list.map((r) => (
              <li key={r} className="flex items-start gap-3 text-black/75 text-lg">
                <span className="mono accent text-xs mt-2">▸</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
          {p.notes && p.notes.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              {p.notes.map((n) => (
                <div key={n.label} className="card rounded-2xl p-7">
                  <div className="text-lg font-bold mb-2">{n.label}</div>
                  <div className="text-black/60 leading-relaxed">{n.body}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WHY */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="tag mono mb-4">{p.whyEyebrow}</div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 max-w-3xl">{p.whyTitle}</h2>
        <div className={`grid gap-4 ${p.why.length === 4 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {p.why.map((w) => (
            <div key={w.title} className="card rounded-2xl p-7">
              <div className="text-lg font-bold mb-2">{w.title}</div>
              <div className="text-black/60 leading-relaxed">{w.body}</div>
            </div>
          ))}
        </div>

        {p.process && (
          <div className="mt-16">
            <div className="tag mono mb-6">HOW A SEARCH WORKS</div>
            <ol className="grid md:grid-cols-4 gap-4">
              {p.process.map((s, i) => (
                <li key={s.title} className="card rounded-2xl p-7">
                  <div className="mono accent text-xs mb-3">STEP {String(i + 1).padStart(2, "0")}</div>
                  <div className="text-lg font-bold mb-2">{s.title}</div>
                  <div className="text-black/60 text-sm leading-relaxed">{s.body}</div>
                </li>
              ))}
            </ol>
          </div>
        )}
        {p.processLine && (
          <p className="mt-10 text-black/70 text-lg leading-relaxed max-w-3xl">
            <strong>How it works:</strong> {p.processLine}
          </p>
        )}
        {p.extraLine && (
          <p className="mt-6 text-black/70 text-lg leading-relaxed max-w-3xl">
            <strong>{p.extraLine.label}</strong> {p.extraLine.body}
            {p.extraLine.link && (
              <>
                {" "}
                <Link href={p.extraLine.link.href} className="accent font-semibold hover:underline">
                  {p.extraLine.link.text} →
                </Link>
              </>
            )}
          </p>
        )}
      </section>

      {/* QUOTES */}
      <section className="bg-[#F4F1ED] border-y border-black/10">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="tag mono mb-8">WHAT CLIENTS SAY</div>
          <div className="grid md:grid-cols-2 gap-4">
            {p.quotes.map((q) => (
              <figure key={q.name} className="card rounded-2xl p-7">
                <blockquote className="text-black/80 leading-relaxed mb-5">&ldquo;{q.quote}&rdquo;</blockquote>
                <figcaption className="text-sm">
                  <span className="font-bold">{q.name}</span>
                  <span className="text-black/50"> · {q.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {p.faqs && p.faqs.length > 0 && (
        <div className="-mt-px">
          <FaqSection eyebrow="QUESTIONS" title="Common questions." items={p.faqs} />
        </div>
      )}

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{p.ctaTitle}</h2>
          {p.ctaLine && <p className="text-black/55 mb-8">{p.ctaLine}</p>}
          <div className="flex justify-center gap-4 flex-wrap">
            {p.ctas.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className={`${c.ghost ? "btn-ghost" : "btn-primary"} px-6 py-3.5 rounded-md font-semibold inline-flex items-center gap-2`}
              >
                {c.label} <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

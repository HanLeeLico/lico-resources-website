import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { articles, getRecentArticles } from "@/lib/articles";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cybersecurity Hiring Insights & Market Notes",
  description:
    "Weekly insights on cybersecurity, CISO compensation, IT audit, tech risk hiring across Singapore, APAC, and the Middle East. Career advice for cybersecurity professionals.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Cybersecurity Hiring Insights — Lico Resources",
    description: "Weekly notes on cybersecurity and tech GRC hiring across APAC.",
    url: "/insights",
    type: "website",
    images: [{ url: "/og-insights.png", width: 1200, height: 630, alt: "Lico Resources Insights" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-insights.png"] },
};

// Legacy LinkedIn-only post teasers (kept for now; new posts go via lib/articles).
const linkedInTeasers = [
  { tag: "INDUSTRY INSIGHTS", read: "6 MIN READ", title: "The Future of Hiring: Degrees, AI, and Everything In Between", excerpt: "Degrees are still important — but the shift has happened. Your ability to work with AI tools will become as fundamental as knowing how to use email." },
  { tag: "CASE STUDY", read: "1 MIN WATCH", title: "Filling the 'Unfillable' Technology Risk Role", excerpt: "How we helped a leading financial institution fill a critical role open for six months — in just three weeks." },
  { tag: "CAREER TIPS", read: "5 MIN READ", title: "Stop Rejecting Yourself from Jobs You Haven't Even Applied For", excerpt: "Smart, capable people read job descriptions like they're checking boxes on an impossible checklist. Here's what to do instead." },
  { tag: "LEADERSHIP", read: "5 MIN READ", title: "Managers Who Take Credit: How to Spot Them Before You Take the Job", excerpt: "Good talent leaves when leadership stops giving credit. Here are the early warning signs to spot during interviews." },
  { tag: "CAREER TIPS", read: "6 MIN READ", title: "The 6-Step Interview Intelligence Framework Most Candidates Miss", excerpt: "The ones who get hired aren't the best talkers — they're the best listeners. Most candidates pitch themselves into a corner." },
  { tag: "INDUSTRY INSIGHTS", read: "5 MIN READ", title: "The 48-Hour Offer Rule: Why Slow Hiring Just Became Corporate Suicide", excerpt: "While you're scheduling round four with HR, your competition just hired your top choice. Fast movers win the talent war." },
  { tag: "CAREER TIPS", read: "5 MIN READ", title: "When Companies Ghost You After Final Rounds", excerpt: "Final interview went perfectly. They promised to call Monday. That was six weeks ago. Here's what's actually happening behind the silence." },
];

const LINKEDIN_URL = "https://www.linkedin.com/company/lico-resources";

export default function InsightsPage() {
  const recent = getRecentArticles(5);
  const featured = recent[0];
  return (
    <main>
      <Nav />
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Insights", href: "/insights" }]} />

      <section className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <div className="tag mono mb-4">INSIGHTS</div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
          Notes from the market. <span className="accent">Published weekly.</span>
        </h1>
        <p className="text-black/65 text-lg md:text-xl max-w-3xl leading-relaxed mb-6">
          Observations on cybersecurity and technology GRC hiring across Asia Pacific and the Middle East. Posts go up on LinkedIn first and are archived here.
        </p>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener" className="btn-primary px-6 py-3.5 rounded-md font-semibold inline-flex items-center gap-2">
          Follow on LinkedIn <span>→</span>
        </a>
      </section>

      <section className="bg-[#F4F1ED] border-y border-black/10">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured && (
              <Link
                href={`/insights/${featured.slug}`}
                className="card rounded-2xl p-7 block lg:col-span-2 hover:no-underline group"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="mono text-xs accent-bg text-white px-2.5 py-1 rounded tracking-widest">LATEST</span>
                  <span className="mono text-xs text-black/40 tracking-widest">{featured.category} · {featured.readTime}</span>
                </div>
                <div className="grid md:grid-cols-5 gap-6 items-center">
                  <div className="md:col-span-3">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight tracking-tight">
                      {featured.title}<br />
                      <span className="accent">{featured.subtitle.split(" — ")[0]}.</span>
                    </h3>
                    <p className="text-black/55 leading-relaxed mb-5">{featured.cardExcerpt ?? featured.excerpt}</p>
                    <span className="mono accent text-xs tracking-widest group-hover:underline">READ THE ARTICLE →</span>
                  </div>
                  {featured.carousel?.[0] && (
                    <div className="md:col-span-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={featured.carousel[0].src} alt="" className="w-full rounded-lg border border-black/10 shadow-sm" />
                    </div>
                  )}
                </div>
              </Link>
            )}

            {/* Other on-site articles */}
            {recent.slice(1).map((a) => (
              <Link key={a.slug} href={`/insights/${a.slug}`} className="card rounded-2xl p-7 block hover:no-underline">
                <div className="flex items-center gap-2 mono text-xs text-black/40 mb-5">
                  <span>{a.category}</span>
                  <span className="accent">·</span>
                  <span>{a.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-snug">{a.title}</h3>
                <p className="text-black/55 text-sm leading-relaxed mb-6">{a.cardExcerpt ?? a.excerpt}</p>
                <span className="mono accent text-xs hover:underline">READ THE ARTICLE →</span>
              </Link>
            ))}

            {/* Legacy LinkedIn-only teasers */}
            {linkedInTeasers.map((p, i) => (
              <article key={`l-${i}`} className="card rounded-2xl p-7">
                <div className="flex items-center gap-2 mono text-xs text-black/40 mb-5">
                  <span>{p.tag}</span>
                  <span className="accent">·</span>
                  <span>{p.read}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-snug">{p.title}</h3>
                <p className="text-black/55 text-sm leading-relaxed mb-6">{p.excerpt}</p>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener" className="mono accent text-xs hover:underline">
                  READ ON LINKEDIN →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

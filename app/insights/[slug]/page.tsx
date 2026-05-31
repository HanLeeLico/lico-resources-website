import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArticleCarousel from "@/components/ArticleCarousel";
import ArticleBody from "@/components/ArticleBody";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { articles, getArticle } from "@/lib/articles";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found" };

  const ogImage = article.carousel?.[0]?.src ?? "/og-image.png";
  return {
    title: `${article.title} — Lico Resources`,
    description: article.excerpt,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/insights/${slug}`,
      publishedTime: article.publishedDate,
      authors: ["Lico Resources"],
      tags: [article.category.toLowerCase()],
      images: [{ url: ogImage, width: 1200, height: 1500 }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [ogImage],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const publishedLong = new Date(article.publishedDate).toLocaleDateString("en-SG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
      <Nav />

      <ArticleJsonLd
        title={article.title}
        subtitle={article.subtitle}
        slug={article.slug}
        publishedDate={article.publishedDate}
        category={article.category}
        excerpt={article.excerpt}
        image={article.carousel?.[0]?.src}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Insights", href: "/insights" },
          { name: article.title, href: `/insights/${slug}` },
        ]}
      />

      <section className="max-w-3xl mx-auto px-8 pt-12 pb-10">
        <a href="/insights" className="mono accent text-xs hover:underline tracking-widest">
          ← ALL INSIGHTS
        </a>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="chip">{article.category.replace("_", " ").toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase())}</span>
          <span className="mono text-xs text-black/40 tracking-widest">{article.readTime}</span>
          <span className="mono text-xs text-black/40 tracking-widest">· PUBLISHED {publishedLong.toUpperCase()}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-6 mb-5 leading-[1.05]">
          {article.title}
        </h1>
        <p className="text-xl md:text-2xl text-black/65 leading-snug max-w-2xl">{article.subtitle}</p>
      </section>

      {article.carousel && article.carousel.length > 0 && (
        <section className="max-w-2xl mx-auto px-8 pb-10">
          <ArticleCarousel slides={article.carousel} />
        </section>
      )}

      <section className="max-w-3xl mx-auto px-8 pb-20">
        <ArticleBody sections={article.body} />
        {article.linkedinUrl && (
          <p className="text-sm text-black/40 mt-12 pt-6 border-t border-black/10">
            <span className="mono">Originally posted on LinkedIn. </span>
            <a href={article.linkedinUrl} target="_blank" rel="noopener" className="accent hover:underline mono">
              Follow the author →
            </a>
          </p>
        )}
      </section>

      <section className="bg-[#F4F1ED] border-y border-black/10">
        <div className="max-w-3xl mx-auto px-8 py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
            Thinking about your next move? <span className="accent">Let&apos;s talk.</span>
          </h3>
          <p className="text-black/55 mb-8">
            We work confidentially with mid-career cybersecurity and tech GRC professionals navigating the next step.
          </p>
          <a href="/contact" className="btn-primary px-6 py-3.5 rounded-md font-semibold inline-flex items-center gap-2">
            Get in Touch →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

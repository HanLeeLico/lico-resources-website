import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main>
      <Nav />
      <section className="max-w-3xl mx-auto px-8 py-32 text-center">
        <div className="tag mono mb-4">404</div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Page not found.
        </h1>
        <p className="text-black/65 text-lg leading-relaxed mb-10">
          The link you followed may be broken, or the page may have moved. Try one of these instead.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/" className="btn-primary px-6 py-3.5 rounded-md font-semibold inline-flex items-center gap-2">
            Back to Home →
          </Link>
          <Link href="/insights" className="btn-ghost px-6 py-3.5 rounded-md font-semibold">
            Read Insights
          </Link>
          <Link href="/contact" className="btn-ghost px-6 py-3.5 rounded-md font-semibold">
            Contact Us
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

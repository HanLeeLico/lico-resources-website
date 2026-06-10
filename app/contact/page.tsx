import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Lico Resources — Cybersecurity Recruitment Singapore",
  description:
    "Brief us on a cybersecurity or tech GRC search, or submit your CV confidentially. Singapore office at 5 Shenton Way. We respond within 48 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Lico Resources",
    description: "Singapore cybersecurity & tech GRC recruitment. Brief us or submit your CV. We respond within 48 hours.",
    url: "/contact",
    type: "website",
    images: [{ url: "/og-contact.png", width: 1200, height: 630, alt: "Contact Lico Resources" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-contact.png"] },
};

export default function Contact() {
  return (
    <main>
      <Nav />
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />

      <section className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <div className="tag mono mb-4">CONTACT</div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
          Let's talk. <span className="accent">Confidentially.</span>
        </h1>
        <p className="text-black/65 text-lg md:text-xl max-w-3xl leading-relaxed">
          Whether you're hiring, looking, or needing contract capability — drop us a note. We move quietly and respond within 48 hours.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* FORM */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card rounded-2xl p-8">
              <div className="mono accent text-xs tracking-widest mb-2">EMAIL</div>
              <a href="mailto:info@licoresources.com" className="text-xl font-semibold hover:underline accent">
                info@licoresources.com
              </a>
            </div>
            <div className="card rounded-2xl p-8">
              <div className="mono accent text-xs tracking-widest mb-2">PHONE</div>
              <a href="tel:+6584818854" className="text-xl font-semibold hover:underline accent">
                +65 8481 8854
              </a>
            </div>
            <div className="card rounded-2xl p-8">
              <div className="mono accent text-xs tracking-widest mb-2">SINGAPORE OFFICE</div>
              <div className="text-base font-semibold text-black/85 leading-relaxed">
                5 Shenton Way<br />
                #10-01 UIC Building<br />
                Singapore 068808
              </div>
            </div>
            <div className="card rounded-2xl p-8">
              <div className="mono accent text-xs tracking-widest mb-2">REGULATORY</div>
              <div className="space-y-1 text-sm text-black/65">
                <div>EA Licence: <span className="font-semibold text-black">13C6733</span></div>
                <div>UEN: <span className="font-semibold text-black">201322494Z</span></div>
                <div>Lico Resources Pte Ltd</div>
              </div>
            </div>
            <div className="card rounded-2xl p-8">
              <div className="mono accent text-xs tracking-widest mb-2">SOCIAL</div>
              <a
                href="https://www.linkedin.com/company/lico-resources"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 font-semibold hover:underline accent"
              >
                LinkedIn <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

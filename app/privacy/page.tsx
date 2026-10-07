import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy — Lico Resources",
  description:
    "How Lico Resources Pte Ltd collects, uses and protects personal data under Singapore's Personal Data Protection Act 2012 (PDPA).",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Lico Resources",
    description: "How Lico Resources collects, uses and protects personal data under Singapore's PDPA.",
    url: "/privacy",
    type: "website",
  },
};

const LAST_UPDATED = "7 October 2026";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold tracking-tight mt-12 mb-4">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-black/70 leading-relaxed mb-4">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-6 space-y-2 text-black/70 leading-relaxed mb-4">{children}</ul>;
}

export default function Privacy() {
  return (
    <main>
      <Nav />
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy" }]} />

      <section className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        <div className="tag mono mb-4">PRIVACY</div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">Privacy Policy</h1>
        <p className="text-black/65 text-lg max-w-3xl leading-relaxed">
          <strong>Lico Resources Pte Ltd</strong>
          <br />
          Last updated: {LAST_UPDATED}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="max-w-3xl">
        <H2>1. Who we are</H2>
        <P>Lico Resources Pte Ltd (&quot;Lico Resources&quot;, &quot;we&quot;, &quot;us&quot;) is an executive search firm in Singapore.</P>
        <UL>
          <li>UEN: 201322494Z</li>
          <li>Employment Agency Licence No: 13C6733</li>
          <li>Address: 5 Shenton Way, #10-01 UIC Building, Singapore 068808</li>
        </UL>
        <P>
          We follow Singapore&apos;s Personal Data Protection Act 2012 (PDPA). This policy explains what personal data we
          collect, why we collect it, and how we look after it.
        </P>

        <H2>2. What this policy covers</H2>
        <P>This policy covers personal data we collect when you:</P>
        <UL>
          <li>visit www.licoresources.com</li>
          <li>contact us through the website, by email or by phone</li>
          <li>work with us as a candidate or as a client</li>
        </UL>

        <H2>3. What personal data we collect</H2>
        <P>
          <strong>When you use our contact form:</strong> your name, email address, company, the type of enquiry, and
          your message.
        </P>
        <P>
          <strong>When you work with us as a candidate:</strong> your CV and the details in it, such as your contact
          details, work history, qualifications, current and expected pay, notice period, and references. We also keep
          notes from our conversations with you.
        </P>
        <P>
          <strong>When you work with us as a client:</strong> your name, job title, company and business contact
          details, and details of the roles you are hiring for.
        </P>
        <P>
          <strong>When you visit our website:</strong> we use Google Analytics to understand how people use the site. It
          collects things like the pages you visit, how long you stay, the type of device and browser you use, your
          approximate location (city or country), and the website that sent you to us. It does not tell us your name,
          and we do not use it to identify you.
        </P>

        <H2>4. Why we use your personal data</H2>
        <P>We use your personal data to:</P>
        <UL>
          <li>reply to your enquiries</li>
          <li>assess whether you are a good fit for a role, and talk to you about job opportunities</li>
          <li>introduce candidates to clients, and manage the hiring process</li>
          <li>manage our relationships with clients and candidates</li>
          <li>understand how our website is used, so we can improve it</li>
          <li>
            meet our legal and regulatory duties, including those that apply to licensed employment agencies in
            Singapore
          </li>
        </UL>

        <H2>5. Your consent</H2>
        <P>
          We collect, use and share your personal data only with your consent, or where the law allows us to without
          consent.
        </P>
        <P>
          If you are a candidate and you send us your CV, you agree that we may share it with clients who are hiring for
          roles that may suit you. Where we can, we will let you know before we do. If you do not want us to share your
          details with a particular company, or with anyone, just tell us and we will respect that.
        </P>
        <P>
          You can withdraw your consent at any time by contacting our Data Protection Officer (see section 12). If you
          do, we may no longer be able to help you with your job search or your hiring needs.
        </P>

        <H2>6. Who we share your personal data with</H2>
        <P>We may share your personal data with:</P>
        <UL>
          <li>
            <strong>Clients (prospective employers)</strong>, if you are a candidate, for roles that may suit you (see
            section 5)
          </li>
          <li>
            <strong>Service providers who help us run our business</strong>, such as our website host (Netlify), website
            analytics (Google), and our email and IT providers. They may only use your data to provide their services to
            us.
          </li>
          <li>
            <strong>Government bodies or regulators</strong>, where the law requires it
          </li>
        </UL>
        <P>We do not sell your personal data.</P>

        <H2>7. Sending data outside Singapore</H2>
        <P>
          Some of our service providers store data on servers outside Singapore. When this happens, we take steps to make
          sure your data is protected to a standard comparable to the PDPA.
        </P>

        <H2>8. Cookies and Google Analytics</H2>
        <P>
          Cookies are small files that a website stores on your device. Our website uses cookies set by Google Analytics
          to count visits and see which pages are popular.
        </P>
        <P>
          You can block or delete cookies in your browser settings. You can also stop Google Analytics from collecting
          your data by installing the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            className="accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </P>

        <H2>9. How long we keep your personal data</H2>
        <P>
          We keep your personal data only for as long as we need it for the purposes in this policy, or as long as the
          law requires.
        </P>
        <P>
          If you are a candidate, we may keep your details so that we can contact you about suitable roles in the
          future. You can ask us to delete your details at any time.
        </P>

        <H2>10. How we protect your personal data</H2>
        <P>
          We take reasonable steps to protect your personal data from unauthorised access, use, change, disclosure or
          loss. This includes limiting who can access it and using secure systems.
        </P>

        <H2>11. Your rights</H2>
        <P>You can ask us:</P>
        <UL>
          <li>
            for a copy of the personal data we hold about you, and how we have used or shared it in the past year
          </li>
          <li>to correct personal data that is wrong or incomplete</li>
          <li>to stop using your personal data, by withdrawing your consent</li>
        </UL>
        <P>
          We will reply as soon as we reasonably can, and usually within 30 days. If we need more time, we will tell you.
          We may charge a reasonable fee for giving you a copy of your data. If we do, we will tell you the fee first.
        </P>

        <H2>12. Contact our Data Protection Officer</H2>
        <P>If you have any questions about this policy or your personal data, please contact:</P>
        <div className="card rounded-2xl p-8 mb-4 text-black/70 leading-relaxed">
          <strong className="text-black">Sze Lee, Data Protection Officer</strong>
          <br />
          Lico Resources Pte Ltd
          <br />
          Email:{" "}
          <a href="mailto:info@licoresources.com" className="accent underline">
            info@licoresources.com
          </a>
          <br />
          Phone:{" "}
          <a href="tel:+6583342286" className="accent underline">
            +65 8334 2286
          </a>
          <br />
          Address: 5 Shenton Way, #10-01 UIC Building, Singapore 068808
        </div>

        <H2>13. Changes to this policy</H2>
        <P>
          We may update this policy from time to time. The latest version will always be on this page, with the date it
          was last updated.
        </P>
        </div>
      </section>

      <Footer />
    </main>
  );
}

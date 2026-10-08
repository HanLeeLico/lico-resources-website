import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";

const PATH = "/ciso-executive-search-singapore";

export const metadata: Metadata = {
  title: "CISO Executive Search Singapore",
  description:
    "Confidential executive search for CISOs, Heads of Cyber and BISOs in Singapore, APAC and the Middle East. Specialist since 2013. EA Licence 13C6733.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "CISO Executive Search Singapore | Lico Resources",
    description: "Confidential executive search for CISOs, Heads of Cyber and BISOs in Singapore, APAC and the Middle East.",
    url: PATH,
    type: "website",
  },
};

export default function Page() {
  return (
    <NicheLanding
      path={PATH}
      breadcrumb="CISO Executive Search"
      eyebrow="CISO EXECUTIVE SEARCH · SINGAPORE"
      headline="CISO search."
      headlineAccent="Done by specialists."
      intro="Hiring a CISO is one of the riskiest hires a board makes. The right person protects the firm and earns the regulator's trust. The wrong one costs a year. We have recruited cybersecurity and tech risk professionals in Singapore since 2013, and it's the only kind of work we do."
      service={{
        name: "CISO Executive Search",
        description: "Confidential executive search for CISOs, Heads of Cyber Security and BISOs in Singapore, APAC and the Middle East.",
        category: "Executive Search",
      }}
      listEyebrow="ROLES WE SEARCH FOR"
      listTitle="Security leadership, from CISO down."
      list={[
        "Chief Information Security Officer (CISO)",
        "Head of Cyber Security / Head of Information Security",
        "Business Information Security Officer (BISO)",
        "Deputy CISO and Head of Security Operations",
        "Head of Cloud Security and Head of Application Security",
        "Interim CISO and vCISO, while you search",
      ]}
      whyEyebrow="WHY FIRMS USE US"
      whyTitle="Why firms use us for CISO searches."
      why={[
        { title: "We only do this.", body: "Cybersecurity and tech GRC, nothing else. We know the senior cyber talent market, including people who aren't looking." },
        { title: "We know the pay.", body: "Tier-1 CISO total pay can pass S$700k in strong bonus years. Senior people who switch firms often expect 15–20% more. We help you set an offer that lands the first time." },
        { title: "We keep it quiet.", body: "Most CISO searches are confidential. Some replace someone still in the seat. We approach candidates directly and protect your name until you're ready." },
        { title: "We know the rules.", body: "In financial services, your CISO has to satisfy MAS rules on technology risk (TRM) as well as your board. We test for that from the first call." },
      ]}
      process={[
        { title: "Discovery", body: "A deep brief on the role, the team, the tech and the culture. We agree the must-haves." },
        { title: "Shortlist", body: "3–5 candidates, each interviewed by us and explained in context." },
        { title: "Interview", body: "Confidential coordination, with honest feedback both ways and reference checks." },
        { title: "Offer", body: "Pay negotiation, counter-offer handling and a 90-day check-in." },
      ]}
      extraLine={{ label: "Need cover while you search?", body: "We also place interim CISOs and vCISOs on contract, so the seat isn't empty for months.", link: { text: "See contractor options", href: "/contractors" } }}
      quotes={[
        { quote: "A very trustworthy recruiter.", name: "Aaron Huang", role: "CEO, Bank of China Private Equity Investment" },
        { quote: "Listens to the needs of us as a client and carefully discusses requirements to ensure the best fit.", name: "Christian Krebs", role: "Regional Head, Aquila Capital" },
      ]}
      faqs={[
        { question: "How long does a CISO search take?", answer: "Usually 3–6 months from first brief to signed offer. Senior notice periods can add more." },
        { question: "Do you work on a retained basis?", answer: "It depends on the role. Some senior searches are retained and some are contingency. We'll suggest the right model for yours." },
        { question: "Do you search outside Singapore?", answer: "Yes, across APAC and the Middle East." },
      ]}
      ctaTitle="Planning a CISO hire?"
      ctaLine="Talk to us in confidence, or call +65 8334 2286."
      ctas={[
        { label: "Start a search", href: "/contact" },
        { label: "Call +65 8334 2286", href: "tel:+6583342286", ghost: true },
      ]}
    />
  );
}

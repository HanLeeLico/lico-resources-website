import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";

const PATH = "/financial-services-cybersecurity-recruitment";

export const metadata: Metadata = {
  title: "Financial Services Cybersecurity Recruitment Singapore",
  description:
    "Cybersecurity and tech GRC hiring for banks, insurers, asset managers, exchanges and fintechs regulated by MAS. Specialist search since 2013.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Financial Services Cybersecurity Recruitment Singapore | Lico Resources",
    description: "Cybersecurity and tech GRC hiring for banks, insurers, asset managers, exchanges and fintechs regulated by MAS.",
    url: PATH,
    type: "website",
  },
};

export default function Page() {
  return (
    <NicheLanding
      path={PATH}
      breadcrumb="Financial Services Cybersecurity Recruitment"
      eyebrow="FINANCIAL SERVICES · SINGAPORE"
      headline="Security and risk hiring"
      headlineAccent="for regulated firms."
      intro="In financial services, a cyber or tech risk hire has to satisfy the regulator as well as the business. A good CV isn't enough. We help MAS-regulated firms hire people who can stand in front of an inspection and run the function day to day."
      service={{
        name: "Financial Services Cybersecurity & Tech GRC Recruitment",
        description: "Cybersecurity and technology GRC hiring for MAS-regulated banks, insurers, asset managers, exchanges and fintechs.",
        category: "Recruitment",
      }}
      listEyebrow="WHO WE WORK WITH"
      listTitle="Banks, insurers, asset managers, exchanges and fintechs."
      list={[
        "Retail and digital banks",
        "Wholesale and investment banks",
        "Insurers",
        "Asset and wealth managers",
        "Payments firms and exchanges",
        "Fintechs preparing for, or growing after, a MAS licence",
      ]}
      notes={[
        { label: "What we place", body: "CISOs and Heads of Cyber · Technology Risk and IT Audit · Cloud and Application Security · Security Operations · Third-party risk and resilience · Interim and contract specialists" },
        { label: "Track record", body: "500+ professionals placed with 78+ companies across 9 countries since 2013. We keep client names confidential." },
      ]}
      whyEyebrow="WHAT MAKES FS HIRING DIFFERENT"
      whyTitle="What makes FS hiring different."
      why={[
        { title: "Regulation shapes the role.", body: "MAS TRM, outsourcing and third-party risk rules, and incident reporting all decide what a good hire looks like. We brief candidates on this before they meet you." },
        { title: "Each sector hires differently.", body: "A digital bank and an insurer want different CISOs. Our H2 2026 report breaks hiring down across six FS sectors." },
        { title: "Pay moves fast.", body: "Head-of-function pay in Cloud and Application Security rose 10–12% in H1 2026. We give you current numbers, not last year's survey." },
      ]}
      quotes={[
        { quote: "Outstanding recruitment expertise with deep industry knowledge and excellent results.", name: "Mark Dymock", role: "Chief of Staff, Standard Chartered Bank" },
        { quote: "Excellent service delivery and strong candidate pipeline. A trusted recruitment partner.", name: "Joicy Dinh", role: "Managing Director, Rabobank Hong Kong" },
      ]}
      ctaTitle="Building or rebuilding a security or risk team?"
      ctaLine="Want the H2 2026 FS hiring report?"
      ctas={[
        { label: "Start a search", href: "/contact" },
        { label: "Get the report", href: "/h2-2026", ghost: true },
      ]}
    />
  );
}

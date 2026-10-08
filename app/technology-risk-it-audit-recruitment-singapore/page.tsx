import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";

const PATH = "/technology-risk-it-audit-recruitment-singapore";

export const metadata: Metadata = {
  title: "Technology Risk & IT Audit Recruitment Singapore",
  description:
    "Specialist recruiter for technology risk, IT audit and cyber GRC roles in Singapore banks, insurers and fintechs. Permanent and contract. EA Licence 13C6733.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Technology Risk & IT Audit Recruitment Singapore | Lico Resources",
    description: "Specialist recruiter for technology risk, IT audit and cyber GRC roles in Singapore banks, insurers and fintechs.",
    url: PATH,
    type: "website",
  },
};

export default function Page() {
  return (
    <NicheLanding
      path={PATH}
      breadcrumb="Technology Risk & IT Audit Recruitment"
      eyebrow="TECH RISK & IT AUDIT · SINGAPORE"
      headline="Tech risk and IT audit hiring."
      headlineAccent="It's all we do."
      intro="Good tech risk and IT audit people are hard to find. They need to understand both technology and regulation, and few people do both well. Big agencies post a job ad and hope. We already know the people, because this has been our niche since 2013."
      service={{
        name: "Technology Risk & IT Audit Recruitment",
        description: "Permanent and contract recruitment for technology risk, IT audit and cyber GRC roles in Singapore financial services.",
        category: "Recruitment",
      }}
      listEyebrow="ROLES WE RECRUIT"
      listTitle="First line, second line, third line, and in between."
      list={[
        "Head of Technology Risk and Technology Risk Managers (1st and 2nd line)",
        "Head of IT Audit, IT Audit Managers and Senior IT Auditors",
        "Cyber Risk and IT GRC specialists",
        "Third-party / outsourcing risk (TPRM) and Technology Resilience leads",
        "Data Protection and Privacy risk roles",
        "AI risk and model governance roles (new and growing fast)",
        "Contract tech risk leads and IT audit specialists for projects and regulatory deadlines",
      ]}
      notes={[
        { label: "Proof: the “unfillable” role", body: "A leading financial institution had a critical technology risk role open for 6 months. We filled it in 3 weeks. This kind of search is where a specialist network makes the difference." },
        { label: "Search: Head of Risk & Control (1.5 line of defence)", body: "A regulated Singapore financial institution needed a leader to sit between the business and the risk team, checking controls before problems reach second-line risk. We placed a candidate from a global insurer." },
      ]}
      whyEyebrow="WHY HIRING MANAGERS USE US"
      whyTitle="Why hiring managers use us."
      why={[
        { title: "We speak the language.", body: "MAS TRM, outsourcing rules, audit methods, control testing. We screen for real understanding, not keywords on a CV." },
        { title: "We track the rules that drive hiring.", body: "New rules on third-party risk, AI risk and cyber trust are creating roles that didn't exist two years ago. Our H2 2026 report maps which roles each rule creates." },
        { title: "Permanent or contract.", body: "Need someone for a regulatory deadline? We place contract specialists too." },
      ]}
      processLine="a deep brief, then a shortlist of 3–5 interviewed candidates, then confidential interviews, then offer and a 90-day check-in."
      extraLine={{ label: "Pay bands:", body: "for IT Audit and Tech Risk roles, see our", link: { text: "H2 2026 report", href: "/h2-2026" } }}
      quotes={[
        { quote: "One of the greatest strengths is the ability to offer valuable advice and guidance, demonstrating a good understanding of the industry and market trends.", name: "Joseph Lee", role: "Compliance Director, PetroChina International" },
        { quote: "Exceptional professionalism and deep understanding of our requirements.", name: "George Francis Albert", role: "Senior Manager, Infrastructure Information Security & Governance, AIA Singapore" },
      ]}
      ctaTitle="Hiring for tech risk or IT audit?"
      ctaLine="Looking for your next tech risk role? Send us your CV."
      ctas={[
        { label: "Start a search", href: "/contact" },
        { label: "Send your CV", href: "/contact", ghost: true },
      ]}
    />
  );
}

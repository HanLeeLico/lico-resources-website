// Inject JSON-LD structured data into the page.
// Each schema renders in its own <script type="application/ld+json">.
//
// Search engines use these to enrich SERP listings (rich snippets, knowledge
// panel, breadcrumbs, FAQ accordions) and to better understand entity
// relationships across the site.

const SITE_URL = "https://www.licoresources.com";
const ORG_NAME = "Lico Resources";
const ORG_LEGAL_NAME = "Lico Resources Pte Ltd";

// =============================================================
// ProfessionalService — primary entity. More specific than Organization,
// inherits LocalBusiness so Google treats it as a local business.
// =============================================================
export function ProfessionalServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "EmploymentAgency"],
    "@id": `${SITE_URL}/#organization`,
    name: ORG_NAME,
    legalName: ORG_LEGAL_NAME,
    alternateName: "Lico",
    url: SITE_URL,
    logo: `${SITE_URL}/lico-logo.png`,
    image: `${SITE_URL}/og-image.png`,
    description:
      "Specialist recruitment firm focused on cybersecurity and technology Governance, Risk & Compliance — across Singapore, APAC, and the Middle East.",
    slogan: "Less is more. Specialisation matters.",
    foundingDate: "2013",
    email: "info@licoresources.com",
    telephone: "+65 8481 8854",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 Shenton Way, #10-01 UIC Building",
      addressLocality: "Singapore",
      postalCode: "068808",
      addressCountry: "SG",
    },
    geo: { "@type": "GeoCoordinates", latitude: 1.2789, longitude: 103.8472 },
    sameAs: ["https://www.linkedin.com/company/lico-resources"],
    identifier: [
      { "@type": "PropertyValue", propertyID: "EA Licence", value: "13C6733" },
      { "@type": "PropertyValue", propertyID: "UEN", value: "201322494Z" },
    ],
    areaServed: [
      { "@type": "Country", name: "Singapore" },
      { "@type": "Place", name: "Asia Pacific" },
      { "@type": "Place", name: "Middle East" },
      { "@type": "Country", name: "Hong Kong" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Malaysia" },
      { "@type": "Country", name: "Indonesia" },
    ],
    serviceType: [
      "Cybersecurity recruitment",
      "CISO executive search",
      "Technology Governance Risk and Compliance recruitment",
      "IT audit recruitment",
      "Technology risk recruitment",
      "MAS TRM specialist recruitment",
      "Cloud security recruitment",
      "Application security recruitment",
      "Contract and interim cybersecurity placement",
    ],
    knowsAbout: [
      "Cybersecurity recruitment",
      "CISO search",
      "Technology Governance Risk and Compliance",
      "IT Audit",
      "Technology risk management",
      "MAS Technology Risk Management",
      "Cloud security",
      "Application security",
      "DevSecOps",
      "Penetration testing",
      "ISO 27001",
      "NIST CSF",
      "SOC 2",
      "Data privacy",
      "PDPA",
      "GDPR",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lico Resources Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Executive Search",
            description:
              "Confidential retained search for CISO, Head of Security, Head of IT Audit, Head of Tech Risk, BISO, and VP-level cybersecurity & GRC leadership roles.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Talent Acquisition",
            description:
              "End-to-end recruitment across mid- and senior-level cybersecurity and technology GRC roles.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contract Staffing",
            description:
              "Interim CISO, vCISO, tech risk leads, IT audit specialists, cloud security SMEs, and project-based pen-test crews.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "RPO Solutions",
            description:
              "Recruitment Process Outsourcing for organisations building or scaling cybersecurity and GRC functions.",
          },
        },
      ],
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

// =============================================================
// WebSite — enables sitelinks search box in Google
// =============================================================
export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: ORG_NAME,
    url: SITE_URL,
    inLanguage: "en-SG",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/insights?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

// Kept for backward-compat — alias of ProfessionalServiceJsonLd
export const OrganizationJsonLd = ProfessionalServiceJsonLd;

// =============================================================
// Article — for /insights/[slug] pages
// =============================================================
export function ArticleJsonLd(props: {
  title: string;
  subtitle: string;
  slug: string;
  publishedDate: string;
  category: string;
  excerpt: string;
  image?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.title,
    alternativeHeadline: props.subtitle,
    description: props.excerpt,
    articleSection: props.category,
    datePublished: props.publishedDate,
    dateModified: props.publishedDate,
    url: `${SITE_URL}/insights/${props.slug}`,
    image: props.image ? `${SITE_URL}${props.image}` : `${SITE_URL}/og-image.png`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    author: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-SG",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/insights/${props.slug}` },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

// =============================================================
// BreadcrumbList — for any inner page
// =============================================================
export function BreadcrumbJsonLd(props: { items: { name: string; href: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: props.items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.href}`,
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

// =============================================================
// FAQPage — renders an accordion in Google SERP for FAQ-style content
// =============================================================
export function FaqJsonLd({ qa }: { qa: { question: string; answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

// =============================================================
// Service — render on the Services page for each offering
// =============================================================
export function ServiceJsonLd(props: {
  name: string;
  description: string;
  url: string;
  category: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: props.name,
    description: props.description,
    serviceType: props.category,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "Place", name: "Singapore" },
      { "@type": "Place", name: "Asia Pacific" },
      { "@type": "Place", name: "Middle East" },
    ],
    url: `${SITE_URL}${props.url}`,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

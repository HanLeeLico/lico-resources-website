// Inject JSON-LD structured data into <head>.
// Each schema renders in its own <script type="application/ld+json">.

const SITE_URL = "https://www.licoresources.com";
const ORG_NAME = "Lico Resources";
const ORG_LEGAL_NAME = "Lico Resources Pte Ltd";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    legalName: ORG_LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/lico-logo.png`,
    description:
      "Specialist recruitment firm focused on cybersecurity and technology Governance, Risk & Compliance — Singapore, APAC, Middle East.",
    foundingDate: "2013",
    email: "info@licoresources.com",
    telephone: "+65 8481 8854",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 Shenton Way, #10-01 UIC Building",
      addressLocality: "Singapore",
      postalCode: "068808",
      addressCountry: "SG",
    },
    sameAs: ["https://www.linkedin.com/company/lico-resources"],
    identifier: [
      { "@type": "PropertyValue", propertyID: "EA Licence", value: "13C6733" },
      { "@type": "PropertyValue", propertyID: "UEN", value: "201322494Z" },
    ],
    areaServed: [
      { "@type": "Place", name: "Singapore" },
      { "@type": "Place", name: "Asia Pacific" },
      { "@type": "Place", name: "Middle East" },
    ],
    knowsAbout: [
      "Cybersecurity recruitment",
      "Technology Governance Risk and Compliance",
      "CISO search",
      "IT Audit recruitment",
      "Technology risk management",
      "Cloud security recruitment",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORG_NAME,
    url: SITE_URL,
    inLanguage: "en-SG",
    publisher: { "@type": "Organization", name: ORG_NAME, url: SITE_URL },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

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
    description: props.excerpt,
    articleSection: props.category,
    datePublished: props.publishedDate,
    dateModified: props.publishedDate,
    url: `${SITE_URL}/insights/${props.slug}`,
    image: props.image ? `${SITE_URL}${props.image}` : `${SITE_URL}/og-image.png`,
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/lico-logo.png` },
    },
    author: { "@type": "Organization", name: ORG_NAME },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/insights/${props.slug}` },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

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

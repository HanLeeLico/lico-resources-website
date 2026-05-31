import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL = "https://www.licoresources.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lico Resources — Cybersecurity & Technology GRC Recruitment",
    template: "%s | Lico Resources",
  },
  description:
    "Specialist recruitment firm focused on cybersecurity and technology Governance, Risk & Compliance — across Singapore, APAC, and the Middle East.",
  keywords: [
    "cybersecurity recruitment",
    "GRC recruitment",
    "technology risk recruitment",
    "Singapore cybersecurity headhunter",
    "CISO search",
    "IT audit recruitment",
    "MAS TRM specialists",
    "APAC cybersecurity recruiter",
  ],
  authors: [{ name: "Lico Resources" }],
  creator: "Lico Resources",
  publisher: "Lico Resources Pte Ltd",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: SITE_URL,
    siteName: "Lico Resources",
    title: "Lico Resources — Cybersecurity & Technology GRC Recruitment",
    description:
      "Specialist recruitment firm focused on cybersecurity and technology Governance, Risk & Compliance — across Singapore, APAC, and the Middle East.",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Lico Resources" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lico Resources — Cybersecurity & Technology GRC Recruitment",
    description:
      "Specialist recruitment firm focused on cybersecurity and technology Governance, Risk & Compliance — Singapore, APAC, Middle East.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  verification: {
    // Add real verification tokens before launch:
    // google: "google-site-verification-token",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-SG" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        {children}
      </body>
    </html>
  );
}

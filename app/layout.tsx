import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ProfessionalServiceJsonLd, WebsiteJsonLd } from "@/components/JsonLd";

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

// Allow staging/production to set their own base URL via env var.
// Falls back to www.licoresources.com (the eventual production URL).
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.licoresources.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cybersecurity Recruitment Singapore | Lico Resources",
    template: "%s | Lico Resources",
  },
  description:
    "Singapore cybersecurity, CISO, tech risk & GRC recruitment. Permanent and contract placements across APAC and the Middle East.",
  keywords: [
    "cybersecurity recruitment Singapore",
    "CISO recruiter Singapore",
    "cybersecurity headhunter Singapore",
    "GRC recruitment Singapore",
    "technology risk recruitment",
    "IT audit recruitment Singapore",
    "MAS TRM specialist recruiter",
    "cybersecurity executive search APAC",
    "cybersecurity contractor Singapore",
    "vCISO Singapore",
    "cloud security recruiter",
    "Middle East cybersecurity recruitment",
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
    title: "Cybersecurity Recruitment Singapore | Lico Resources",
    description:
      "Singapore cybersecurity & tech GRC recruitment. CISO, IT audit, tech risk. APAC & Middle East.",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Lico Resources — Cybersecurity & Tech GRC Recruitment" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Recruitment Singapore | Lico Resources",
    description:
      "Specialist cybersecurity & tech GRC recruitment. Singapore. APAC. Middle East. EA Licence 13C6733.",
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
    // Set GOOGLE_SITE_VERIFICATION env var in Netlify with the value Google gives you.
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-SG" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans">
        <ProfessionalServiceJsonLd />
        <WebsiteJsonLd />
        {children}
      </body>
    </html>
  );
}

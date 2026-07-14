import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Sans, Instrument_Serif } from "next/font/google";
import { RouteTransitionProvider } from "@/components/site/RouteTransitionProvider";
import { SiteChrome } from "@/components/site/SiteChrome";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { site } from "@/data/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap"
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-home",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Designer & Developer`,
    template: `%s — ${site.name}`
  },
  description: "Portfolio of Gurtejbir Singh, a designer and developer creating distinctive digital products, brand websites and interactive experiences.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Designer & Developer`,
    description: site.statement,
    url: "/",
    siteName: `${site.name} Portfolio`,
    images: [{ url: "/images/gurtejbir-hero.png", width: 1254, height: 1254, alt: `${site.name} portrait` }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Designer & Developer`,
    description: site.statement,
    images: ["/images/gurtejbir-hero.png"]
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#f1efe9",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: site.role,
    homeLocation: { "@type": "Place", name: site.location },
    sameAs: [site.github]
  };

  return (
    <html lang="en" className={`${geist.variable} ${instrumentSerif.variable} ${instrumentSans.variable}`}>
      <body>
        <SmoothScroll />
        <RouteTransitionProvider>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <SiteChrome />
          <main id="main-content" data-page-content>{children}</main>
        </RouteTransitionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

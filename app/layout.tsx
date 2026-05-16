import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gurtejbir Singh - Creative Developer & Digital Experience Builder",
  description:
    "Portfolio of Gurtejbir Singh, a creative developer building premium digital experiences, cinematic landing pages, and motion-led interfaces for brands and products.",
  openGraph: {
    title: "Gurtejbir Singh - Creative Developer",
    description:
      "Premium digital experiences, cinematic landing pages, and motion-led interfaces.",
    images: ["/Primary%20Hero%20Portrait.png"],
    type: "website",
    siteName: "Gurtejbir Singh Portfolio"
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  },
  metadataBase: new URL("https://www.protfolio.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

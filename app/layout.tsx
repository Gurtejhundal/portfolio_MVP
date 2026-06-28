import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/components/CardSwap.css";
import "@/components/CircularGallery.css";
import "@/components/CurvedLoop.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gurtejbir Singh - Student Developer Portfolio",
  description:
    "Portfolio of Gurtejbir Singh, a B.Tech student building polished web interfaces, project-backed frontend work, and motion-led digital experiences.",
  openGraph: {
    title: "Gurtejbir Singh - Student Developer Portfolio",
    description:
      "Project-backed frontend work, polished web interfaces, and motion-led digital experiences.",
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

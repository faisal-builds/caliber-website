// app/layout.jsx
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "../lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://aureon.example"),
  title: {
    default: `${site.brand} — ${site.tagline}`,
    template: `%s · ${site.brand}`,
  },
  description:
    "Aureon builds bespoke AI systems that read insurance documents and place the data exactly where it belongs. Enterprise automation for modern agencies.",
  keywords: [
    "insurance AI automation",
    "ACORD form extraction",
    "insurance agency software",
    "document automation",
    "AI for insurance",
  ],
  authors: [{ name: site.brand }],
  openGraph: {
    title: `${site.brand} — ${site.tagline}`,
    description:
      "Bespoke AI automation that reads insurance documents and places the data where it belongs.",
    type: "website",
    siteName: site.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — ${site.tagline}`,
    description:
      "Bespoke AI automation that reads insurance documents and places the data where it belongs.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

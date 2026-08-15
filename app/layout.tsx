import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  title: "Sail & A Song | Music, Stories & Salt Air",
  description:
    "Intimate acoustic performances and conversations with songwriters, filmed aboard a sailboat in Santa Barbara Harbor.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Sail & A Song",
    description: "Every song has a story. Come hear it from the harbor.",
    type: "website",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Sail & A Song — Music, Stories & Salt Air" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sail & A Song",
    description: "Music, stories & salt air from Santa Barbara Harbor.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

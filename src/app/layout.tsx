import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://foliole-tree-management.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Foliole | Professional Arborist & Tree Care — Melbourne",
    template: "%s | Foliole Tree Management",
  },
  description:
    "Melbourne-based qualified arborist. Professional tree care including pruning to AS 4373, tree health diagnostics, structural support, removals, and subcontracting across Melbourne and greater Victoria.",
  keywords: [
    "arborist Melbourne",
    "tree care Melbourne",
    "arboriculture Melbourne",
    "tree pruning Melbourne",
    "tree removal Melbourne",
    "tree risk assessment Melbourne",
    "arborist subcontracting Melbourne",
    "tree health assessment",
    "decay assessment",
    "tree management Victoria",
    "certified arborist Melbourne",
    "tree lopping Melbourne",
    "emergency tree removal Melbourne",
    "stump grinding Melbourne",
    "tree cabling Melbourne",
    "AS 4373 pruning",
    "AQF arborist",
    "qualified arborist Melbourne",
  ],
  authors: [{ name: "Foliole Tree Management" }],
  creator: "Foliole Tree Management",
  publisher: "Foliole Tree Management",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Foliole | Professional Arborist & Tree Care — Melbourne",
    description:
      "Melbourne-based qualified arborist. Tree health, pruning, structural support, removals, and subcontracting across Melbourne and greater Victoria.",
    url: siteUrl,
    siteName: "Foliole Tree Management",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: `${siteUrl}/jordan-climbing.jpeg`,
        width: 1200,
        height: 630,
        alt: "Jordan from Foliole — professional arborist climbing a large tree in Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foliole | Professional Arborist — Melbourne",
    description:
      "Melbourne-based qualified arborist. Tree health, pruning, removals, and subcontracting across greater Victoria.",
    images: [`${siteUrl}/jordan-climbing.jpeg`],
  },
  other: {
    "geo.region": "AU-VIC",
    "geo.placename": "Melbourne",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <body className="font-body overflow-x-hidden">{children}</body>
    </html>
  );
}

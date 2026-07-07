import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

const siteUrl = "https://lumberjord.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LumberJord | Professional Arborist & Tree Care, Melbourne",
    template: "%s | LumberJord",
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
  authors: [{ name: "LumberJord" }],
  creator: "LumberJord",
  publisher: "LumberJord",
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
    title: "LumberJord | Professional Arborist & Tree Care, Melbourne",
    description:
      "Melbourne-based qualified arborist. Tree health, pruning, structural support, removals, and subcontracting across Melbourne and greater Victoria.",
    url: siteUrl,
    siteName: "LumberJord",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Jordan from LumberJord, professional arborist climbing a large tree in Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LumberJord | Professional Arborist, Melbourne",
    description:
      "Melbourne-based qualified arborist. Tree health, pruning, removals, and subcontracting across greater Victoria.",
    images: [`${siteUrl}/og-image.jpg`],
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
    <html lang="en-AU" className={rubik.variable}>
      <body className="font-body overflow-x-hidden">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

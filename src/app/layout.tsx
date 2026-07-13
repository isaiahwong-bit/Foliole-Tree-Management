import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import PageLoader from "@/components/PageLoader";
import Analytics from "@/components/Analytics";
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
    default: "LumberJord | Arborist for Melbourne's Bayside & Inner East",
    template: "%s | LumberJord",
  },
  description:
    "Qualified climbing arborist across Melbourne's bayside and inner east: Brighton, Toorak, Kew, Camberwell and surrounds. Pruning to AS 4373, tree health diagnostics, removals, and subcontracting.",
  keywords: [
    "arborist Melbourne",
    "arborist Bayside Melbourne",
    "arborist Brighton",
    "arborist Toorak",
    "arborist Kew",
    "arborist Camberwell",
    "tree removal Bayside",
    "tree pruning inner east Melbourne",
    "tree care Melbourne",
    "tree pruning Melbourne",
    "tree removal Melbourne",
    "tree risk assessment Melbourne",
    "arborist subcontracting Melbourne",
    "tree health assessment",
    "decay assessment",
    "heritage tree pruning Melbourne",
    "certified arborist Melbourne",
    "tree lopping Melbourne",
    "stump grinding Melbourne",
    "tree cabling Melbourne",
    "AS 4373 pruning",
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
    title: "LumberJord | Arborist for Melbourne's Bayside & Inner East",
    description:
      "Qualified climbing arborist across Brighton, Toorak, Kew, Camberwell and Melbourne's south east. Tree health, pruning, structural support, removals, and subcontracting.",
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
    title: "LumberJord | Arborist, Bayside & Inner East Melbourne",
    description:
      "Qualified climbing arborist. Tree health, pruning, removals, and subcontracting across Melbourne's bayside and inner-eastern suburbs.",
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
        <PageLoader />
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foliole Tree Management | Expert Arboriculture Services",
  description:
    "Foliole provides expert tree care services specializing in precision pruning, health assessments, and safe removals. Elevating arboriculture from root to crown.",
  keywords: [
    "tree care",
    "arboriculture",
    "tree pruning",
    "tree removal",
    "tree health assessment",
    "arborist",
    "tree management",
  ],
  openGraph: {
    title: "Foliole Tree Management | Expert Arboriculture Services",
    description:
      "Expert tree care services specializing in precision pruning, health assessments, and safe removals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-body overflow-x-hidden">{children}</body>
    </html>
  );
}

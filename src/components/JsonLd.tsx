export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://lumberjord.com.au/#business",
    name: "LumberJord",
    description:
      "Melbourne-based qualified arborist. Professional tree care including pruning to AS 4373, tree health diagnostics, structural support, removals, and subcontracting across Melbourne and greater Victoria.",
    url: "https://lumberjord.com.au",
    image: "https://lumberjord.com.au/og-image.jpg",
    telephone: "+61413268827",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -37.8136,
      longitude: 144.9631,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Melbourne",
      },
      {
        "@type": "State",
        name: "Victoria",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Jordan",
      jobTitle: "Certified Arborist",
    },
    knowsAbout: [
      "Arboriculture",
      "Tree pruning",
      "Tree risk assessment",
      "Tree health diagnostics",
      "Tree removal",
      "Arborist subcontracting",
      "AS 4373 Australian Pruning Standards",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Arborist Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tree Pruning",
            description:
              "Dead wood removal, weight reduction, formative pruning, and canopy restoration to Australian Standards (AS 4373).",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tree Health & Diagnostics",
            description:
              "Decay detection and risk assessment, visual health inspections, pest and disease identification.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Structural Support",
            description:
              "Cable and bracing systems, structural assessment, and load reduction for valuable trees.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tree Removals",
            description:
              "Confined space removals, complex removals, sectional dismantling, and stump grinding.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Arborist Subcontracting",
            description:
              "High-level climbing support, complex operations, and overflow capacity for tree management companies.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

import type { MetadataRoute } from "next";
import { suburbs } from "@/lib/suburbs";
import { services } from "@/lib/services";
import { treeGuides } from "@/lib/trees";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lumberjord.com.au";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${baseUrl}/arborist`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...suburbs.map((suburb) => ({
      url: `${baseUrl}/arborist/${suburb.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/trees`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...treeGuides.map((tree) => ({
      url: `${baseUrl}/trees/${tree.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}

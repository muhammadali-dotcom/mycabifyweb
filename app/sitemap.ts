import type { MetadataRoute } from "next";

const baseUrl = "https://mycabify.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/why-mycabify", priority: 0.8, changeFrequency: "monthly" },
    { path: "/dispatch-system", priority: 0.8, changeFrequency: "monthly" },
    { path: "/driver-app", priority: 0.8, changeFrequency: "monthly" },
    { path: "/passenger-app", priority: 0.8, changeFrequency: "monthly" },
    { path: "/web-booker", priority: 0.8, changeFrequency: "monthly" },
    { path: "/airport-transfers", priority: 0.8, changeFrequency: "monthly" },
    { path: "/corporate-travel", priority: 0.8, changeFrequency: "monthly" },
    { path: "/private-hire-taxi-firms", priority: 0.8, changeFrequency: "monthly" },
    { path: "/school-run", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sen-transport", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://innerspace.com.au",
      priority: 1,
    },
    {
      url: "https://innerspace.com.au/about",
      priority: 0.8,
    },
    {
      url: "https://innerspace.com.au/contact",
      priority: 0.8,
    },
  ];
}
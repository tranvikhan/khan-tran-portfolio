import type { MetadataRoute } from "next";
import { projects } from "@/data/data";

const siteUrl = "https://khan.io.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    ...Object.keys(projects).map((id) => ({
      url: `${siteUrl}/projects/${id}`,
    })),
  ];
}

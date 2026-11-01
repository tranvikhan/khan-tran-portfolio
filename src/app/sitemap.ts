import type { MetadataRoute } from "next";
import { projects } from "@/data/data";
import { localePath, siteLastUpdated, siteUrl } from "@/constants/site";

const paths = ["", ...Object.keys(projects).map((id) => `/projects/${id}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  return (["en", "vi"] as const).flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}${localePath(locale, path)}`,
      lastModified: siteLastUpdated,
    }))
  );
}

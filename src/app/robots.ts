import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://khan.io.vn/sitemap.xml",
    host: "https://khan.io.vn",
  };
}

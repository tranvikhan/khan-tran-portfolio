export const siteUrl = "https://khan.io.vn";
export const siteName = "Khan Trần";
export const siteLastUpdated = "2026-11-01";
export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;

export const legalName = "Trần Vi Khan";
export const nameAliases = [
  "Khan Trần",
  "Tran Vi Khan",
  "Khan Tran",
  "Vi Khan",
  "Kevin",
  "Kevin Dev",
  "Dev Kevin",
  "Khan Dev",
  "Dev Khan",
  "Vi Khan Dev",
];
export const socialProfiles = [
  "https://www.linkedin.com/in/tranvikhan/",
  "https://github.com/tranvikhan",
];

export const shareImage = "/images/og-image.jpg";

export function localePath(locale: "en" | "vi", path: string) {
  if (locale === "en") return path;
  return path === "/" ? "/vi" : `/vi${path}`;
}

export function toJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

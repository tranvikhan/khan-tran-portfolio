import type { Metadata } from "next";
import type { Locale } from "@/components/SitePreferences";
import { legalName, localePath, nameAliases, personId, shareImage, siteName, siteUrl, socialProfiles, websiteId } from "@/constants/site";
import { projects } from "@/data/data";
import { projectCopy, skillGroups } from "@/data/siteCopy";

const seoCopy = {
  en: {
    title: "Trần Vi Khan (Kevin Dev) | Product Designer & Developer",
    description: "Trần Vi Khan, also known as Khan Trần, Kevin Dev and Vi Khan Dev, is a product designer and developer in Cần Thơ, Vietnam building web and mobile products.",
    jobTitle: "Product Designer and Developer",
    imageAlt: `3D portrait of ${legalName}`,
    projectImageAlt: "project preview",
    notFound: "Project not found",
    ogLocale: "en_US",
    ogAlternateLocale: "vi_VN",
  },
  vi: {
    title: "Trần Vi Khan (Kevin Dev) | Thiết kế sản phẩm & Lập trình viên",
    description: "Trần Vi Khan, còn gọi là Khan Trần, Kevin Dev và Vi Khan Dev, là nhà thiết kế sản phẩm và lập trình viên tại Cần Thơ, Việt Nam, xây dựng sản phẩm web và di động.",
    jobTitle: "Nhà thiết kế sản phẩm và lập trình viên",
    imageAlt: `Chân dung 3D của ${legalName}`,
    projectImageAlt: "ảnh giới thiệu dự án",
    notFound: "Không tìm thấy dự án",
    ogLocale: "vi_VN",
    ogAlternateLocale: "en_US",
  },
} as const;

function languageAlternates(path: string) {
  return { en: path, vi: localePath("vi", path), "x-default": path };
}

export const projectParams = () => Object.keys(projects).map((id) => ({ id }));

export function siteMetadata(locale: Locale): Metadata {
  const { title, description, imageAlt, ogLocale, ogAlternateLocale } = seoCopy[locale];
  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s | ${siteName}` },
    description,
    applicationName: siteName,
    authors: [{ name: legalName, url: siteUrl }],
    creator: legalName,
    alternates: { canonical: localePath(locale, "/"), languages: languageAlternates("/") },
    robots: { index: true, follow: true },
    openGraph: {
      type: "profile",
      url: `${siteUrl}${localePath(locale, "/")}`,
      siteName,
      title,
      description,
      locale: ogLocale,
      alternateLocale: [ogAlternateLocale],
      images: [{ url: shareImage, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [shareImage] },
  };
}

export function projectMetadata(id: string, locale: Locale): Metadata {
  const project = projects[id];
  const content = projectCopy[id]?.[locale];
  const { notFound, projectImageAlt, ogLocale, ogAlternateLocale } = seoCopy[locale];
  if (!project || !content) return { title: notFound, robots: { index: false } };

  const title = `${project.name} — ${content.category}`;
  const path = `/projects/${project.id}`;
  return {
    title,
    description: content.summary,
    alternates: { canonical: localePath(locale, path), languages: languageAlternates(path) },
    openGraph: {
      type: "article",
      url: `${siteUrl}${localePath(locale, path)}`,
      siteName,
      title: `${title} | ${siteName}`,
      description: content.summary,
      locale: ogLocale,
      alternateLocale: [ogAlternateLocale],
      images: [{ url: project.thumbnail, alt: `${project.name} ${projectImageAlt}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description: content.summary,
      images: [project.thumbnail],
    },
  };
}

export function siteStructuredData(locale: Locale) {
  const { description, jobTitle } = seoCopy[locale];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: legalName,
        alternateName: nameAliases,
        familyName: "Trần",
        givenName: "Vi Khan",
        url: siteUrl,
        image: `${siteUrl}${shareImage}`,
        description,
        jobTitle,
        homeLocation: { "@type": "Place", name: "Cần Thơ, Vietnam" },
        email: "mailto:tranvikhan@gmail.com",
        sameAs: socialProfiles,
        knowsAbout: skillGroups.flatMap((group) => group.skills),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteName,
        alternateName: [legalName, "Kevin Dev", "khan.io.vn"],
        url: siteUrl,
        description,
        inLanguage: ["en", "vi"],
        creator: { "@id": personId },
      },
    ],
  };
}

export function projectStructuredData(id: string, locale: Locale) {
  const project = projects[id];
  const content = projectCopy[id][locale];
  const url = `${siteUrl}${localePath(locale, `/projects/${id}`)}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        name: project.name,
        url,
        description: content.summary,
        inLanguage: locale,
        image: `${siteUrl}${project.thumbnail}`,
        keywords: project.technologies.join(", "),
        creator: { "@id": personId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: siteName, item: `${siteUrl}${localePath(locale, "/")}` },
          { "@type": "ListItem", position: 2, name: project.name, item: url },
        ],
      },
    ],
  };
}

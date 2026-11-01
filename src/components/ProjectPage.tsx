import { notFound } from "next/navigation";
import { ProjectClientPage } from "@/components/ProjectClientPage";
import type { Locale } from "@/components/SitePreferences";
import { toJsonLd } from "@/constants/site";
import { projects } from "@/data/data";
import { projectCopy } from "@/data/siteCopy";
import { projectStructuredData } from "@/utils/seo";

export function ProjectPage({ id, locale }: { id: string; locale: Locale }) {
  if (!projects[id] || !projectCopy[id]) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(projectStructuredData(id, locale)) }} />
      <ProjectClientPage />
    </>
  );
}

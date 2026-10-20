import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectClientPage from "./ProjectClientPage";
import { projects } from "@/data/data";
import { projectCopy } from "@/data/siteCopy";

const siteUrl = "https://khan.io.vn";

type ProjectParams = { params: { id: string } };

export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({ id }));
}

export function generateMetadata({ params }: ProjectParams): Metadata {
  const project = projects[params.id];
  const content = projectCopy[params.id]?.en;
  if (!project || !content) return { title: "Project not found", robots: { index: false } };

  const title = `${project.name} — ${content.category}`;
  const url = `/projects/${project.id}`;
  return {
    title,
    description: content.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url: `${siteUrl}${url}`,
      siteName: "Khan Trần Portfolio",
      title: `${title} | Khan Trần`,
      description: content.summary,
      images: [{ url: project.thumbnail, alt: `${project.name} project preview` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Khan Trần`,
      description: content.summary,
      images: [project.thumbnail],
    },
  };
}

export default function ProjectPage({ params }: ProjectParams) {
  if (!projects[params.id] || !projectCopy[params.id]) notFound();
  return <ProjectClientPage />;
}

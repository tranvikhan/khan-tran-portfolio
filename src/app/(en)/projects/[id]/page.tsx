import { ProjectPage } from "@/components/ProjectPage";
import { projectMetadata, projectParams } from "@/utils/seo";

type ProjectParams = { params: { id: string } };

export const generateStaticParams = projectParams;

export function generateMetadata({ params }: ProjectParams) {
  return projectMetadata(params.id, "en");
}

export default function Page({ params }: ProjectParams) {
  return <ProjectPage id={params.id} locale="en" />;
}

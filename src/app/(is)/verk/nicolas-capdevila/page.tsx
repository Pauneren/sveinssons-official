import { ProjectCaseStudyPage } from "@/components/project/ProjectCaseStudyPage";
import { createProjectMetadata, projectCopy } from "@/lib/projects";

export const metadata = createProjectMetadata("nicolas-capdevila", "is");

export default function IcelandicNicolasPage() {
  return <ProjectCaseStudyPage copy={projectCopy["nicolas-capdevila"].is} />;
}

import { ProjectCaseStudyPage } from "@/components/project/ProjectCaseStudyPage";
import { createProjectMetadata, projectCopy } from "@/lib/projects";

export const metadata = createProjectMetadata("nicolas-capdevila", "en");

export default function EnglishNicolasPage() {
  return <ProjectCaseStudyPage copy={projectCopy["nicolas-capdevila"].en} />;
}

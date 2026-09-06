import { ProjectCaseStudyPage } from "@/components/project/ProjectCaseStudyPage";
import { createProjectMetadata, projectCopy } from "@/lib/projects";

export const metadata = createProjectMetadata("julieta-banco", "en");

export default function EnglishJulietaPage() {
  return <ProjectCaseStudyPage copy={projectCopy["julieta-banco"].en} />;
}

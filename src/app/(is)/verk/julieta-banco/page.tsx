import { ProjectCaseStudyPage } from "@/components/project/ProjectCaseStudyPage";
import { createProjectMetadata, projectCopy } from "@/lib/projects";

export const metadata = createProjectMetadata("julieta-banco", "is");

export default function IcelandicJulietaPage() {
  return <ProjectCaseStudyPage copy={projectCopy["julieta-banco"].is} />;
}

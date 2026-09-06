import { WebsiteDevelopmentPage } from "@/components/service/WebsiteDevelopmentPage";
import { createWebsiteDevelopmentMetadata, websiteDevelopmentCopy } from "@/lib/website-development";

export const metadata = createWebsiteDevelopmentMetadata("en");

export default function EnglishWebsiteDevelopmentPage() {
  return <WebsiteDevelopmentPage copy={websiteDevelopmentCopy.en} />;
}

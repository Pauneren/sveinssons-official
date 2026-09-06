import { WebsiteDevelopmentPage } from "@/components/service/WebsiteDevelopmentPage";
import { createWebsiteDevelopmentMetadata, websiteDevelopmentCopy } from "@/lib/website-development";

export const metadata = createWebsiteDevelopmentMetadata("is");

export default function IcelandicWebsiteDevelopmentPage() {
  return <WebsiteDevelopmentPage copy={websiteDevelopmentCopy.is} />;
}

import { HomePage } from "@/components/home/HomePage";
import { createLocaleMetadata } from "@/lib/seo";

export const metadata = createLocaleMetadata("en");

export default function EnglishHome() {
  return <HomePage />;
}

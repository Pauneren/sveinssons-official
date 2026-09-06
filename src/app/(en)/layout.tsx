import "../globals.css";

import { LocaleDocument } from "@/components/layout/LocaleDocument";
import { createLocaleMetadata } from "@/lib/seo";

export const metadata = createLocaleMetadata("en");

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LocaleDocument language="en">{children}</LocaleDocument>;
}

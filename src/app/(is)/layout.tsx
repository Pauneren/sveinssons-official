import "../globals.css";

import { LocaleDocument } from "@/components/layout/LocaleDocument";
import { createLocaleMetadata } from "@/lib/seo";

export const metadata = createLocaleMetadata("is");

export default function IcelandicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LocaleDocument language="is">{children}</LocaleDocument>;
}

import { Inter } from "next/font/google";

import { LanguageProvider } from "@/context/LanguageContext";
import type { PublicLanguage } from "@/lib/language";
import { localeSeo, siteConfig, siteUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function LocaleDocument({
  language,
  children,
}: {
  language: PublicLanguage;
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: localeSeo[language].description,
    url: siteUrl,
    availableLanguage: ["en", "is"],
  };

  return (
    <html lang={language} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider initialLanguage={language}>{children}</LanguageProvider>
      </body>
    </html>
  );
}

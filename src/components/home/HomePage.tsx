import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LanguageSuggestion } from "@/components/ui/LanguageSuggestion";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { ServiceStrip } from "@/components/sections/ServiceStrip";
import { Work } from "@/components/sections/Work";
import { getRequestCountryPreference } from "@/lib/request-language";

export async function HomePage() {
  const countryPreference = await getRequestCountryPreference();

  return (
    <div className="page-atmosphere min-h-screen">
      <Header />
      <LanguageSuggestion countryPreference={countryPreference} />
      <main>
        <Hero />
        <ServiceStrip />
        <About />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

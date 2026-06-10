import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { ServiceStrip } from "@/components/sections/ServiceStrip";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <div className="page-atmosphere min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiceStrip />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}

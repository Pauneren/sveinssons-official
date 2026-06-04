import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ServiceStrip } from "@/components/sections/ServiceStrip";

export default function Home() {
  return (
    <div className="page-atmosphere min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiceStrip />
        <Services />
      </main>
    </div>
  );
}

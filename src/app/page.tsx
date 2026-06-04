import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TrustLogos } from "@/components/sections/TrustLogos";

export default function Home() {
  return (
    <div className="page-atmosphere min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustLogos />
        <Services />
      </main>
    </div>
  );
}

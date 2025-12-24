import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Venues } from "@/components/sections/venues";
import { Schedule } from "@/components/sections/schedule";
import { Benefits } from "@/components/sections/benefits";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Venues />
      <Schedule />
      <Benefits />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}

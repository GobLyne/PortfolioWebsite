import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import VisionMission from "@/components/sections/VisionMission";
import Objectives from "@/components/sections/Objectives";
import CoreValues from "@/components/sections/CoreValues";
import Programs from "@/components/sections/Programs";
import Impact from "@/components/sections/Impact";
import GetInvolved from "@/components/sections/GetInvolved";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Objectives />
      <CoreValues />
      <Programs />
      <Impact />
      <GetInvolved />
      <Contact />
      <Footer />
    </main>
  );
}

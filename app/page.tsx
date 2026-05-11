import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Hero } from "@/components/Hero";
import { IdentityStrip } from "@/components/IdentityStrip";
import { Manifesto } from "@/components/Manifesto";
import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { Process } from "@/components/Process";
import { SelectedWork } from "@/components/SelectedWork";
import { SmoothScroll } from "@/components/SmoothScroll";
import { VisualNarrative } from "@/components/VisualNarrative";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <IdentityStrip />
        <Manifesto />
        <SelectedWork />
        <Process />
        <VisualNarrative />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

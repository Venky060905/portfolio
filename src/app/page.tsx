import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import DataInsights from "@/components/DataInsights";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <DataInsights />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  );
}

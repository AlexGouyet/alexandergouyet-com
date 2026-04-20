import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-10 flex-1 w-full">
      <Hero />
      <ProjectsGrid />
      <About />
      <Footer />
    </main>
  );
}

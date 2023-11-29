import Footer from "@/components/footer";
import Formation from "@/components/formation";
import Hero from "@/components/hero";
import Presentation from "@/components/presentation";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Presentation />
      <Projects />
      <Formation />
      <Footer />
    </main>
  );
}

// TODO: agregar una página individual para cada proyecto

import { Hero } from "@/components/Hero";
import { Nav } from "@/components/nav";
import { ProjectCard } from "@/components/project-card";
import About from "@/components/About";
import PortfolioPage from "@/components/Portfolio";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-r
    from-pink-200
    via-purple-200
    to-pink-200
    animated-background"
    >
      <Nav />
      <main className="container mx-auto px-6">
        <Hero />
        <About />
        <PortfolioPage />
        <Footer />
      </main>
    </div>
  );
}

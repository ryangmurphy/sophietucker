import React from "react";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/nav";
import Contact from "@/components/Contact";
import About from "@/components/About";
import { Footer } from "@/components/Footer";
import PortfolioPage from "@/components/Portfolio";
import { getWeather } from '@/lib/actions';

export default async function Home() {
  const temperature = await getWeather();

  return (
    <main className="overflow-x-hidden mx-auto scroll-smooth">
      <Nav />
      <Hero />
      <About temperature={temperature} />
      <PortfolioPage />
      <Contact />
      <Footer />
    </main>
  );
}

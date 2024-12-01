import React from "react";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/nav";
import Contact from "@/components/Contact";
import About from "@/components/About";
import { Footer } from "@/components/Footer";
import PortfolioPage from "@/components/Portfolio";

// Server-side weather fetching function
async function getWeather(): Promise<{ main: { temp: number } } | null> {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Halifax,CA&units=metric&appid=${apiKey}`;

    const res = await fetch(url, { next: { revalidate: 1800 } }); // ISR mechanism (revalidate every 30 minutes)
    if (!res.ok) throw new Error("Failed to fetch weather data");

    return await res.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

export default async function Home() {
  const weatherData = await getWeather(); // Fetch weather data on the server
  const temperature = weatherData ? weatherData.main.temp : null;

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

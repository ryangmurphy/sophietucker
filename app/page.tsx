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
    if (!apiKey) {
      throw new Error("API key is missing");
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Halifax,CA&units=metric&appid=${apiKey}`;

    const res = await fetch(url, {
      next: { revalidate: 1800 },
      headers: {
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=2400",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch weather data: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
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

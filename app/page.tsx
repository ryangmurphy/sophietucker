
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/nav";
import Contact from "@/components/Contact";
import About from "@/components/About";
import { Footer } from "@/components/Footer";
import React from "react";
import PortfolioPage from "@/components/Portfolio";

let cachedWeather: { main: { temp: number } } | null = null;
let lastFetched: number = 0;

async function getWeather(): Promise<{ main: { temp: number } } | null> {
  const now = Date.now();

  // If data is cached and less than an hour has passed, return cached data
  if (cachedWeather && now - lastFetched < 1800000) {
    return cachedWeather;
  }

  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Halifax,CA&units=metric&appid=${apiKey}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch weather data");

    // Cache the response
    cachedWeather = await res.json();
    lastFetched = now; // Update the last fetched time

    return cachedWeather;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null; // Return null if the fetch fails
  }
}


export default async function Home() {
  const weatherData = await getWeather();
  const temperature = weatherData ? weatherData.main.temp : null; // Handle case where data is null

  return (
    <main className="overflow-x-hidden mx-auto scroll-smooth md:scroll-auto bg-pink-200">
      <Nav />
      <Hero />
      <About temperature={temperature} />
      <PortfolioPage />
      <Contact />
      <Footer />
    </main>
  );
}

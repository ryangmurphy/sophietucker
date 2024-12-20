'use server'

export async function getWeather() {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
      throw new Error('API key is missing');
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Halifax,CA&units=metric&appid=${apiKey}`;
    
    const res = await fetch(url, {
      next: { revalidate: 1800 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch weather data: ${res.statusText}`);
    }

    const data = await res.json();
    return data.main.temp;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
} 
import { useState } from "react";
import type { WeatherData } from "./types";
import process from "process";

export const WeatherFeature = () => {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const handleSearch=()=>{
    console.log("Searching weather for city:", city);
    if(!city) {
      setError("Please enter a city name");
      return;
    }
    fetchWeatherData(city);
  };
  const fetchWeatherData = async (city: string) => {
    try{
      setLoading(true);
      setError(null);
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2713ac53d197b4aa236f55c2c73b6dc&units=metric`);
   if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to fetch weather data");
      }
      const data = await res.json();
    setWeatherData(data);
    }catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
    
  };
  return (
    <div>
      <h2>Weather Feature</h2>
      <div className="flex gap-2 mb-4">
        <input type="text" placeholder='Enter city name' onChange={(e)=>setCity(e.target.value)} className="border p-2 rounded-md outline-none"/>
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
         >Search</button>
      </div>
      {loading && <p className="text-gray-500">Fetching weather...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && weatherData && (
        <div>
          <h3 className="text-xl font-semibold">
            {weatherData.name}, {weatherData.sys.country}
          </h3>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="mx-auto"
          />
          <p className="text-3xl font-bold">{Math.round(weatherData.main.temp)}°C</p>
          <p className="capitalize text-gray-600">{weatherData.weather[0].description}</p>
          <p className="text-gray-500 text-sm mt-2">
            💧 {weatherData.main.humidity}% humidity
          </p>
      </div>
      )}
    </div>
  )
}

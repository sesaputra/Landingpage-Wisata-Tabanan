"use client";

import { useEffect, useState } from "react";

type WeatherData = {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
    is_day: number;
  };
};

type WeatherProps = {
  latitude: number;
  longitude: number;
  locationName: string;
};

function getWeatherDescription(code: number) {
  switch (code) {
    case 0:
      return "Clear Sky";

    case 1:
      return "Mostly Clear";

    case 2:
      return "Partly Cloudy";

    case 3:
      return "Overcast";

    case 45:
    case 48:
      return "Foggy";

    case 51:
    case 53:
    case 55:
      return "Drizzle";

    case 61:
    case 63:
    case 65:
      return "Rain";

    case 80:
    case 81:
    case 82:
      return "Rain Showers";

    case 95:
      return "Thunderstorm";

    default:
      return "Unknown";
  }
}

export default function Weather({
  latitude,
  longitude,
  locationName,
}: WeatherProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        setWeather(null);

        const response = await fetch(
          `/api/weather?latitude=${latitude}&longitude=${longitude}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather");
        }

        const data = await response.json();

        setWeather(data);
      } catch (error) {
        console.error("Weather error:", error);
      }
    }

    fetchWeather();
  }, [latitude, longitude]);

  if (!weather) {
    return (
      <div className="w-40 animate-pulse">
        <div className="h-3 w-20 rounded bg-white/20" />
        <div className="mt-3 h-8 w-24 rounded bg-white/20" />
      </div>
    );
  }

  const current = weather.current;

  return (
    <div className="text-white">
      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
        {locationName} Today
      </p>

      <div className="mt-2 flex items-end gap-2">
        <span className="font-serif text-4xl leading-none">
          {Math.round(current.temperature_2m)}°
        </span>

        <span className="mb-0.5 text-sm text-white/70">
          C
        </span>
      </div>

      <p className="mt-2 text-xs text-white/80">
        {getWeatherDescription(current.weather_code)}
      </p>

      <div className="mt-3 flex gap-4 text-[10px] uppercase tracking-[0.08em] text-white/50">
        <span>
          {current.relative_humidity_2m}% humidity
        </span>

        <span>
          {current.wind_speed_10m} km/h wind
        </span>
      </div>
    </div>
  );
}
'use server';

const WEATHER_API_URL= process.env.WEATHER_API_URL;
const API_KEY = process.env.API_KEY;

import { HourlyWeatherDetails, WeatherForecast } from '@/models/weather.model';
import { Coordinates } from '@/models/geolocation.model';

export default async function fetchWeatherData({ lat, lon }: Coordinates): Promise<WeatherForecast> {
  const response = await fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&exclude=minutely&lang=en&appid=${API_KEY}&units=metric`);

  return await response.json();
}

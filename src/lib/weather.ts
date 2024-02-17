'use server';

const WEATHER_API_URL= process.env.WEATHER_API_URL;
const API_KEY = process.env.API_KEY;

import { WeatherForecast } from '@/models/weather.model';
import { Coordinates } from '@/models/geolocation.model';

export default async function fetchWeatherData({ lat, lon }: Coordinates):Promise<{ response: WeatherForecast, error?: any }> {
  try {
    if (!WEATHER_API_URL || !API_KEY) {
      throw new Error('WEATHER_API_URL or API_KEY is not defined');
    }

    const response = await fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&exclude=minutely&lang=en&appid=${API_KEY}&units=metric`);

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();

    if (data.hasOwnProperty('message')) {
      throw new Error('Failed to fetch weather data: ' + data.message);
    }

    return { response: data };
  } catch (error) {
    // Save this error into a log file? Send it to a monitoring server?
    console.log(error);

    if (error instanceof Error) {
      return {
        response: {} as WeatherForecast,
        error: error.message
      };
    }

    return {
      response: {} as WeatherForecast,
      error: 'Something went wrong. Please try again later.'
    };
  }
}

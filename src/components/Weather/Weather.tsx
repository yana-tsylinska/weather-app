import fetchWeatherData from '@/lib/weather';
import { Coordinates } from '@/models/geolocation.model';
import { fetchLocationName } from '@/lib/locations';

import styles from './Weather.module.css';

import CurrentWeather from '@/components/CurrentWeather/CurrentWeather';
import HourlyWeather from '@/components/HourlyWeather/HourlyWeather';
import DailyWeather from '@/components/DailyWeather/DailyWeather';

export default async function Weather({ coordinates }: { coordinates: Coordinates }) {
  const [location, weather] = await Promise.all([fetchLocationName(coordinates), fetchWeatherData(coordinates)]);

  return (<>
    <h1 className={styles.title}>{location}</h1>
    <div className={styles.WeatherCards}>
      <CurrentWeather weather={weather.current} />
      <HourlyWeather weather={weather.hourly} />
      <DailyWeather weather={weather.daily} />
    </div>
  </>);
}

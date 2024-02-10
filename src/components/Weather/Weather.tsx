import fetchWeatherData from '@/lib/weather';
import { Coordinates } from '@/models/geolocation.model';
import { fetchLocationName } from '@/lib/locations';

import styles from './Weather.module.css';

import CurrentWeather from '@/components/CurrentWeather/CurrentWeather';

export default async function Weather({ coordinates }: { coordinates: Coordinates }) {
  const [name, weather] = await Promise.all([fetchLocationName(coordinates), fetchWeatherData(coordinates)]);

  return (<>
    <h1 className={styles.title}>Welcome to {name}!</h1>
    <div className={styles.WeatherCards}>
      <CurrentWeather weather={weather.current} />
    </div>
  </>);
}

import styles from './Weather.module.css';

import { Coordinates } from '@/models/geolocation.model';
import fetchWeatherData from '@/lib/weather';
import { fetchLocationName } from '@/lib/locations';

import CurrentWeather from '@/components/CurrentWeather';
import HourlyWeather from '@/components/HourlyWeather';
import DailyWeather from '@/components/DailyWeather';

export default async function Weather({ coordinates }: { coordinates: Coordinates }) {
  const [locationData, weatherData] = await Promise.all([fetchLocationName(coordinates), fetchWeatherData(coordinates)]);

  if (locationData.hasOwnProperty('error') || weatherData.hasOwnProperty('error')) {
    console.error(locationData.error ? locationData.error : weatherData.error);

    return <h1 className={ styles.title }>Something went wrong! Please, try again later. If the problem persist contact the author.</h1>;
  }

  const location = locationData?.response;
  const weather = weatherData?.response;

  return (<>
    { location && <h1 className={ styles.title }>{ location }</h1> }

    { weather &&
      <div className={styles.WeatherCards}>
        <CurrentWeather weather={weather.current} />
        <HourlyWeather weather={weather.hourly} />
        <DailyWeather weather={weather.daily} />
      </div>
    }
  </>);
}

import styles from './HourlyWeather.module.css';

import { HourlyWeatherDetails } from '@/models/weather.model';
import { roundTemperature } from '@/lib/helpers';

import WeatherIcon from '@/components/WeatherIcon';

export default function HourlyWeather({ weather }: { weather: Array<HourlyWeatherDetails> }) {

  function getParsedTime(dt: number): string {
    return new Date(dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  }

  return (
    <section className={styles.WeatherCard}>
      <div className={styles.scrollable}>
        { weather.map((hourlyWeather, index) => (
          <div key={index} className={styles.HourlyWeather}>
            <p>{getParsedTime(hourlyWeather.dt)}</p>
            <div className={styles.WeatherIcon}>
              <WeatherIcon icon={hourlyWeather.weather[0].icon} alt={hourlyWeather.weather[0].main} height={40} width={40} />
            </div>
            <p>{roundTemperature(hourlyWeather.temp)}°C</p>
          </div>
        )) }
      </div>
    </section>
  );
}

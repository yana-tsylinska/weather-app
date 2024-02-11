import { HourlyWeatherDetails } from '@/models/weather.model';
import styles from './HourlyWeather.module.css';
import WeatherIcon from '@/components/WeatherIcon/WeatherIcon';
import { roundTemperature } from '@/lib/helpers';

export default function HourlyWeather({ weather }: { weather: Array<HourlyWeatherDetails> }) {

  function getParsedTime(dt: number): string {
    const date = new Date(dt * 1000)

    return `${date.getHours()}:${date.getMinutes()}`;
  }

  return (
    <section className={styles.WeatherCard}>
      <div className={styles.scrollable}>
        { weather.map((hourlyWeather, index) => (
          <div key={index} className={styles.HourlyWeather}>
            <p>{getParsedTime(hourlyWeather.dt)}</p>
            <div className={styles.WeatherIcon}>
              <WeatherIcon icon={hourlyWeather.weather[0].icon} alt={hourlyWeather.weather[0].description} height={40} width={40} />
            </div>
            <p>{roundTemperature(hourlyWeather.temp)}°C</p>
          </div>
        )) }
      </div>
    </section>
  );
}

import styles from './CurrentWeather.module.css';
import { WeatherCurrent } from '@/models/weather.model';
import WeatherIcon from '@/components/WeatherIcon/WeatherIcon';
import { roundTemperature } from '@/lib/helpers';
export default function CurrentWeather({ weather }: { weather: WeatherCurrent }) {
  const currentWeather = weather.weather[0];

  return (
    <section className={styles.WeatherCard}>
      <div className={styles.WeatherIcon}>
        <WeatherIcon icon={currentWeather.icon} alt={currentWeather.main} height={120} width={120} />
      </div>
      <h3 className={styles.WeatherDescription}>{currentWeather.main}, {currentWeather.description}</h3>
      <p className={styles.Temperature}>{roundTemperature(weather.temp)}°C</p>

      <div className={styles.WeatherCardFooter}>
        <div className={styles.FooterItem}>
          <h5>Feels like</h5>
          <p>{roundTemperature(weather.feels_like)}°C</p>
        </div>
        <div className={styles.FooterItem}>
          <h5>Wind</h5>
          <p>{weather.wind_speed} m/s</p>
        </div>
        <div className={styles.FooterItem}>
          <h5>Humidity</h5>
          <p>{weather.humidity}%</p>
        </div>
      </div>
    </section>
  );
}

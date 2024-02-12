import styles from './DailyWeather.module.css';

import { WeatherDaily } from '@/models/weather.model';
import { roundTemperature } from '@/lib/helpers';

import WeatherIcon from '@/components/WeatherIcon';

export default function DailyWeather({ weather }: { weather: Array<WeatherDaily> }) {

  function getParsedDay(dt: number): string {
    return new Date(dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
  }

  return (
    <section className={styles.DailyWeather}>
      { weather.map((dailyWeather, index) => (
        <div key={index} className={styles.WeatherCard}>
          <p className={styles.WeekDay}>{getParsedDay(dailyWeather.dt)}</p>
          <div className={styles.WeatherInfo}>
            <div className={styles.WeatherIcon}>
              <WeatherIcon icon={dailyWeather.weather[0].icon} alt={dailyWeather.weather[0].main} height={30} width={30} />
            </div>
            <p className={styles.WeatherDescription}>{dailyWeather.weather[0].main}, {dailyWeather.weather[0].description}</p>
          </div>
          <p className={styles.Temperature}>{roundTemperature(dailyWeather.temp.day)}°C</p>
        </div>
      )) }
    </section>
  );
}

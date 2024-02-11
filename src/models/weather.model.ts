export interface WeatherForecast {
  lon: number;
  lat: number;
  current: WeatherCurrent;
  hourly: Array<HourlyWeatherDetails>;
  daily: Array<WeatherDaily>;
  alerts: Array<WeatherAlert>;
}

export interface WeatherDetails {
  dt: number;
  temp: number | Object;
  feels_like: number | Object;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Array<WeatherDescription>;
}

export interface WeatherCurrent extends WeatherDetails {
  temp: number;
  feels_like: number;
  sunrise?: number;
  sunset?: number;
}

export interface HourlyWeatherDetails extends WeatherDetails {
  data: Date;
  temp: number;
  feels_like: Object;
}

export interface WeatherDaily extends WeatherDetails {
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherAlert {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: Array<string>;
  areas: Array<string>;
}

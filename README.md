Simple weather app, build with [Next.js](https://nextjs.org/).

App provides possibility to check current and forecast weather in any city in the world. It uses [OpenWeatherMap](https://openweathermap.org/) API to get weather data. 
Each city weather details showed on separate page. The data displayed includes: temperature, humidity, wind speed, and weather description for today; 24h weather forecast; weather forecast for a week.
Deployed on [Vercel](https://vercel.com/) - [Show me the weather!](https://weather-app-mauve-eight-93.vercel.app/). Can be used on both desktop and mobile devices. Supports dark mode.

## Running locally

First, install all dependencies:

```bash
npm ci
```

Then, create `.env.local` file in the root of the project and add your OpenWeatherMap API key and URLs to it. Example of `.env.local` file content:

```bash 
WEATHER_API_URL="http://api.openweathermap.org/data/3.0/onecall"
GEOCODING_API_URL="http://api.openweathermap.org/geo/1.0/"
API_KEY=your_api_key
```

After that, you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Future improvements

- Add Storybook for components documentation
- Save search history in local storage
- Add ability to add cities to favorites

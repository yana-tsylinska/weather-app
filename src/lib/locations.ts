import { GeolocationModel } from '@/models/geolocation.model';

const GEOCODING_API_URL= 'http://api.openweathermap.org/geo/1.0/direct';
const API_KEY = 'c2b8789a428aecf024fb7e23805c2a76';

export default async function fetchLocationsList(name: string): Promise<Array<GeolocationModel>> {
  const response = await fetch(`${GEOCODING_API_URL}?q=${name}&limit=5&appid=${API_KEY}`);
    const data = await response.json();

  return data.map((location: GeolocationModel) => ({
    id: `${location.lat}_${location.lon}`,
    name: location.name,
    country: location.country,
    state: location.state,
    lat: location.lat,
    lon: location.lon,
  }));
}

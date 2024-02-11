'use server';

const GEOCODING_API_URL= process.env.GEOCODING_API_URL;
const API_KEY = process.env.API_KEY;

import { Coordinates, GeolocationModel } from '@/models/geolocation.model';

export async function fetchLocationsList(name: string): Promise<Array<GeolocationModel>> {
  const response = await fetch(`${GEOCODING_API_URL}direct?q=${name}&limit=5&appid=${API_KEY}`);
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

export async function fetchLocationName({ lat, lon }: Coordinates): Promise<string> {
  const response = await fetch(`${GEOCODING_API_URL}reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`);
  const data = await response.json();

  return `${data[0]?.name}, ${data[0]?.state}, ${data[0]?.country}`;
}

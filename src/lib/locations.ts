'use server';

const GEOCODING_API_URL= process.env.GEOCODING_API_URL;
const API_KEY = process.env.API_KEY;

import { Coordinates, GeolocationModel } from '@/models/geolocation.model';

export async function fetchLocationsList(name: string): Promise<{response: Array<GeolocationModel>, error?: any}> {
  try {
    if (!GEOCODING_API_URL || !API_KEY) {
      throw new Error('GEOCODING_API_URL or API_KEY is not defined');
    }

    const response = await fetch(`${GEOCODING_API_URL}direct?q=${name}&limit=5&appid=${API_KEY}`);

    if (!response.ok) {
      throw new Error('Failed to fetch locations');
    }

    const data = await response.json();

    if (data.hasOwnProperty('message')) {
      throw new Error('Failed to fetch locations: ' + data.message);
    }

    return {
      response: (data.map((location: GeolocationModel) => ({
        id: `${location.lat}_${location.lon}`,
        name: location.name,
        country: location.country,
        state: location.state,
        lat: location.lat,
        lon: location.lon,
      })))
    };
  } catch (error) {
    // Save this error into a log file? Send it to a monitoring server?
    console.log(error);

    if (error instanceof Error) {
      return {
        response: [],
        error: error.message
      };
    }

    return {
      response: [],
      error: 'Failed to fetch locations.'
    };
  }
}

export async function fetchLocationName({ lat, lon }: Coordinates): Promise<{response: string, error?: any}> {
  try {
    if (!GEOCODING_API_URL || !API_KEY) {
      throw new Error('GEOCODING_API_URL or API_KEY is not defined');
    }

    const response = await fetch(`${GEOCODING_API_URL}reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`);

    if (!response.ok) {
      throw new Error('Failed to fetch location name');
    }

    const data = await response.json();

    if (data.hasOwnProperty('message')) {
      throw new Error('Failed to fetch location name: ' + data.message);
    }

    return { response: `${data[0]?.name}, ${data[0]?.state}, ${data[0]?.country}` };
  } catch (error) {
    // Save this error into a log file? Send it to a monitoring server?
    console.log(error);

    if (error instanceof Error) {
      return {
        response: '',
        error: error.message
      };
    }

    return {
      response: '',
      error: 'Something went wrong. Please try again later.'
    };
  }
}

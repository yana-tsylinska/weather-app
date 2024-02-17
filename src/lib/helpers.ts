import { Coordinates } from '@/models/geolocation.model';

export function roundTemperature(temperature: number): number {
  return Math.round(temperature);
}

export function getParsedLocation(locationId: string): { coordinates?: Coordinates, error?: boolean } {
  const locationDetails = locationId.split('_');

  if (locationDetails.length !== 2) {
    return { error: true };
  }

  const lat = parseFloat(locationDetails[0]);
  const lon = parseFloat(locationDetails[1]);

  if (!lat || !lon) {
    return { error: true };
  }

  const coordinates = { lat, lon, };

  return { coordinates };
}


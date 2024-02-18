
export interface GeolocationModel {
  id: string;
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
  fullLocation: string;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

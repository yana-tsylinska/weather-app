import { Coordinates } from '@/models/geolocation.model';

export default function Page({ params }: { params: { location: string } }) {
  const location = parseLocationId(params.location);

  return (
    <div>
      <h1>Welcome to <br></br> {location.lat}, {location.lon}!</h1>
    </div>
  );
}

function parseLocationId(locationId: string): Coordinates {
  const [lat, lon] = locationId.split('_');

  return {
    lat: parseFloat(lat),
    lon: parseFloat(lon),
  };
}

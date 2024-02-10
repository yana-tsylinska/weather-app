import { Suspense } from 'react';

import { Coordinates } from '@/models/geolocation.model';
import Weather from '@/components/Weather/Weather';
import WeatherSkeleton from '@/skeletons/WeaterSkeleton/WeatherSkeleton';

export default function Page({ params }: { params: { location: string } }) {
  const coordinates = parseLocationId(params.location);

  return (
    <div>
      <Suspense fallback={<WeatherSkeleton />}>
        <Weather coordinates={coordinates} />
      </Suspense>
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

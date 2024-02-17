import { Suspense } from 'react';

import Weather from '@/components/Weather';
import WeatherSkeleton from '@/skeletons/WeaterSkeleton';
import { getParsedLocation } from '@/lib/helpers';

export default function Page({ params }: { params: { location: string } }) {
  const { coordinates, error } = getParsedLocation(params.location);

  if (error) {
    return <h1>Incorrect location. Please, start new search. If the problem persist contact the author.</h1>;
  }

  if (!coordinates) {
    return <h1>Something went wrong! Please, try again later. If the problem persist contact the author.</h1>;
  }

  return (
    <div>
      <Suspense fallback={<WeatherSkeleton />}>
        <Weather coordinates={coordinates} />
      </Suspense>
    </div>
  );
}



'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { MdOutlineSearch } from 'react-icons/md';

import styles from './SearchForm.module.css';

import { GeolocationModel } from '@/models/geolocation.model';
import { fetchLocationsList } from '@/lib/locations';

export default function SearchForm() {
  const router = useRouter();
  const [locationName, setLocationName] = useState('');
  const [locationsList , setLocationsList] = useState([] as Array<GeolocationModel>);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLocationSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = await fetchLocationsList(locationName);

    if (data.hasOwnProperty('error')) {
      console.error(data.error);
      setError(true);
      setIsLoaded(true);
      setLocationsList([]);

      return;
    }

    setError(false);
    setIsLoaded(true);
    setLocationsList([...data.response]);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationName(e.target.value);
    setLocationsList([]);
    setError(false);
    setIsLoaded(false);
  };

  const handleRedirect = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => {
    setLocationsList([]);
    setLocationName('');
    setIsLoaded(false);
    router.push(path);
  }

  return (
    <form onSubmit={handleLocationSearch} className={styles.SearchForm}>
      <button type="submit" className={styles.SearchButton} aria-label="Search button">
        <MdOutlineSearch size="1.7em" />
      </button>
      <input type="text" className={styles.SearchInput} placeholder="Search city"
             name="locationName"
             value={locationName} onChange={handleSearchChange}>
      </input>

      { isLoaded && locationsList?.length > 0 && (
        <ul className={styles.Locations}>
          {locationsList.map(({ name, id, country }) => (
            <li key={ id }>
              <Link onClick={(e) => handleRedirect(e, `/locations/${id}`)} href={`/locations/${id}`}>{ name }, { country }</Link>
            </li>
          ))}
        </ul>
      ) }

      { isLoaded && !error && locationsList?.length === 0 && <p className={styles.message}>No locations found. Please, try again.</p> }

      { isLoaded && error && <p className={styles.message}>Something went wrong! Please, try again later. If the problem persist contact the author.</p> }
    </form>
  );
}

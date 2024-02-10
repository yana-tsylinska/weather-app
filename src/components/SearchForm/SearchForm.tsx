'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';

import { MdOutlineSearch } from 'react-icons/md';

import styles from './SearchForm.module.css';

import { GeolocationModel } from '@/models/geolocation.model';
import fetchLocationsList from '@/lib/locations';

export default function SearchForm() {
  const [locationName, setLocationName] = useState('');
  const [locationsList , setLocationsList] = useState([] as Array<GeolocationModel>); // [ { name: '...', lat: 0, lon: 0 }, ...

  const handleLocationSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const locations = await fetchLocationsList(locationName);
    setLocationsList(locations);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationName(e.target.value);
    setLocationsList([]);
  };

  return (
    <form onSubmit={handleLocationSearch} className={styles.SearchForm}>
      <button type="submit" className={styles.SearchButton} aria-label="Search button">
        <MdOutlineSearch size="1.7em" />
      </button>
      <input type="text" className={styles.SearchInput} placeholder="Search city"
             value={locationName} onChange={handleSearchChange}>
      </input>

      { locationsList?.length > 0 && (
        <ul className={styles.Locations}>
          {locationsList.map(({ name, id, country, state }) => (
            <li key={ id }>
              <Link href={`/locations/${id}`}>{ name }, { state }, { country }</Link>
            </li>
          ))}
        </ul>
      ) }
    </form>
  );
}

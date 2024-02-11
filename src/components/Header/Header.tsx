import SearchForm from '../SearchForm';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href={'/'} className={'logo'}>
          <Image
            src={`/logo.svg`}
            width={60} height={60}
            alt={'Logo'}
          />
          Weather
        </Link>
      </h1>

      <SearchForm />
    </header>
  );
}

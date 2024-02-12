import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';

import SearchForm from '@/components/SearchForm';

export default function Home() {
  return (
    <div>
      <Link href={'/'} className={'logo'}>
        <Image
          src={`/logo.svg`}
          width={60} height={60}
          alt={'Logo'}
        />
        Weather
      </Link>

      <h1 className={styles.title}>Welcome to <br></br> Show me the weather!</h1>
      <p className={styles.description}>
        Get started by searching your city below, I will be glad to show you current and forecast weather
      </p>
      <SearchForm />
    </div>
  );
}

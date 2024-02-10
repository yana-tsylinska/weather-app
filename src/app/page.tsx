import styles from "./page.module.css";
import SearchForm from '@/components/SearchForm';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Welcome to <br></br> Show me the weather!</h1>
      <p className={styles.description}>
        Get started by searching your city below, I will be glad to show you current weather and forecast.
      </p>
      <SearchForm />
    </div>
  );
}

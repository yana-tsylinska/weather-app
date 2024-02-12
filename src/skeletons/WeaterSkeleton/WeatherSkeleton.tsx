import styles from './WeatherSkeleton.module.css';

export default function WeatherSkeleton() {

  return (
    <>
      <h1 className={styles.title}>Loading details ...</h1>
      <div className={styles.WeatherCards}></div>
    </>
  );
}

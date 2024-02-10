import SearchForm from '../SearchForm';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      <SearchForm />
    </header>
  );
}

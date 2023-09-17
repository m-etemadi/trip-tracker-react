import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src="/logo.png" alt="World Tracker logo" />
      <h1>World Tracker</h1>
    </Link>
  );
}

export default Logo;

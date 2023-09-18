import { Link } from 'react-router-dom';
import styles from '../Logo/Logo.module.css';

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src="/logo.png" alt="Trip Tracker logo" />
      <h1>Trip Tracker</h1>
    </Link>
  );
}

export default Logo;

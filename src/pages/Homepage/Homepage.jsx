import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import styles from './Homepage.module.css';

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <Logo />

      <section>
        <h2>
          You travel the world.
          <br />
          Trip Tracker keeps track of your adventures.
        </h2>
        <h3>
          An interactive world map that traces your footsteps across every city,
          ensuring your cherished memories are never lost, and allowing you to
          share your global wanderings with friends.
        </h3>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}

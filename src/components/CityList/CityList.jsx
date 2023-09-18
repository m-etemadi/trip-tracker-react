import { useCities } from '../../contexts/CitiesContext';
import Spinner from '../Spinner/Spinner';
import CityItem from '../CityItem/CityItem';
import Message from '../Message/Message';
import styles from '../CityList/CityList.module.css';

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map(city => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
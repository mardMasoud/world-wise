
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import { useCities } from "../CitiesContext";
 function CityList() {
    const { cities }= useCities()
    console.log(cities);
    return (
        <ul className={styles.CityList}>
            {cities.map((city) => (
                <CityItem city={city} key={city.id}/>
            ))}
        </ul>
    );
}
export default CityList
import React from "react";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
export default function CityList({ cities }) {
    console.log(cities);
    return (
        <ul className={styles.CityList}>
            {cities.map((city) => (
                <CityItem city={city} />
            ))}
        </ul>
    );
}

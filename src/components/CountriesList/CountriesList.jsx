import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import styles from "./CountriesList.module.css";

function CountriesList() {
  const [countriesList, setCountriesList] = useState([]);

  const fetchCountries = useCallback(async () => {
    try {
      const res = await fetch("./data/data.json");
      const data = await res.json();
      console.log(data);
      setCountriesList(data);
    } catch (err) {
      throw new Error("Unable to fetch countries");
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <div className={styles.countriesList}>
      {countriesList.map((country) => (
        <Country country={country} key={country.name} />
      ))}
    </div>
  );
}

export default CountriesList;

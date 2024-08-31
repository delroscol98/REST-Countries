import useCountries from "../../hooks/useCounties";
import Country from "../Country/Country";
import styles from "./CountriesList.module.css";

function CountriesList() {
  const { countriesList } = useCountries();

  return (
    <div className={styles.countriesList}>
      {countriesList.map((country) => (
        <Country country={country} key={country.name} />
      ))}
    </div>
  );
}

export default CountriesList;

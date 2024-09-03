import useCountries from "../../hooks/useCounties";
import Country from "../Country/Country";
import styles from "./CountriesList.module.css";

function CountriesList() {
  const { renderedCountries } = useCountries();

  return (
    <div className={styles.countriesList}>
      {renderedCountries.map((country) => (
        <Country country={country} key={country.name} />
      ))}
    </div>
  );
}

export default CountriesList;

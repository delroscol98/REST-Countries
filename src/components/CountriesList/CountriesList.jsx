import { Link } from "react-router-dom";
import useCountries from "../../hooks/useCountries";
import Country from "../Country/Country";
import styles from "./CountriesList.module.css";

function CountriesList() {
  const { renderedCountries } = useCountries();

  return (
    <div className={styles.countriesList}>
      {renderedCountries.map((country) => (
        <Link
          to={`./${country.name}`}
          key={country.name}
          className={styles.countriesList__link}
        >
          <Country country={country} />
        </Link>
      ))}
    </div>
  );
}

export default CountriesList;

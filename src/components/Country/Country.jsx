import useTheme from "../../hooks/useTheme";
import styles from "./Country.module.css";

function Country({ country }) {
  const { isDarkTheme } = useTheme();
  return (
    <article
      className={`${styles.country} ${isDarkTheme ? styles.darkTheme : ""}`}
    >
      <img
        className={styles.country__flag}
        src={country.flags.png}
        alt={`${country.demonym} flag`}
      />
      <div className={styles.country__container}>
        <h2
          className={`${styles.country__name} ${
            isDarkTheme ? styles.darkTheme : ""
          }`}
        >
          {country.name}
        </h2>
        <div className={styles.country__details}>
          <p
            className={`${styles.country__population} ${
              isDarkTheme ? styles.darkTheme : ""
            }`}
          >
            <strong>Population: </strong>
            {country.population.toLocaleString()}
          </p>
          <p
            className={`${styles.country__region} ${
              isDarkTheme ? styles.darkTheme : ""
            }`}
          >
            <strong>Region: </strong>
            {country.region}
          </p>
          <p
            className={`${styles.country__capital} ${
              isDarkTheme ? styles.darkTheme : ""
            }`}
          >
            <strong>Capital: </strong>
            {country.capital}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Country;

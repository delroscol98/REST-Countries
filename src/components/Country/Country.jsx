import styles from "./Country.module.css";

function Country({ country }) {
  return (
    <article className={styles.country}>
      <img
        className={styles.country__flag}
        src={country.flags.png}
        alt={`${country.demonym} flag`}
      />
      <div className={styles.country__container}>
        <h2 className={styles.country__name}>{country.name}</h2>
        <div className={styles.country__details}>
          <p className={styles.country__population}>
            <strong>Population: </strong>
            {country.population}
          </p>
          <p className={styles.country__region}>
            <strong>Region: </strong>
            {country.region}
          </p>
          <p className={styles.country__capital}>
            <strong>Capital: </strong>
            {country.capital}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Country;

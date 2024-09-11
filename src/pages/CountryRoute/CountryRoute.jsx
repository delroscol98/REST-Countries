import Button from "../../components/Button/Button";
import useTheme from "../../hooks/useTheme";
import styles from "./CountryRoute.module.css";
import { countryCodes } from "../../utilities/countryCodes";
import { Link, useNavigate, useParams } from "react-router-dom";
import useCountries from "../../hooks/useCountries";

function CountryRoute() {
  const { isDarkTheme } = useTheme();
  const { countriesList } = useCountries();
  const { countryName } = useParams();
  const navigate = useNavigate();

  const country = countriesList.find((country) => country.name === countryName);

  return (
    <div
      className={`${styles.countryRoute} ${
        isDarkTheme ? styles.darkTheme : ""
      }`}
    >
      <div className={styles.countryRoute__btnContainer}>
        <Button onClick={() => navigate(-1)}>&larr; Back</Button>
      </div>
      <div className={styles.countryRoute__container}>
        <img
          className={styles.countryRoute__flag}
          src={country.flag}
          alt={`${country.denonym} flag`}
        />
        <section className={styles.countryRoute__detailsContainer}>
          <h1
            className={`${styles.countryRoute__name} ${
              isDarkTheme ? styles.darkTheme : ""
            }`}
          >
            {country.name}
          </h1>
          <div
            className={`${styles.countryRoute__details} ${
              isDarkTheme ? styles.darkTheme : ""
            }`}
          >
            <div className={styles.countryRoute__detailsSection}>
              <p className={styles.countryRoute__paraKey}>
                Native Name:&nbsp;
                <span className={styles.countryRoute__paraValue}>
                  {country.nativeName}
                </span>
              </p>
              <p className={styles.countryRoute__paraKey}>
                Population:&nbsp;
                <span className={styles.countryRoute__paraValue}>
                  {country.population.toLocaleString()}
                </span>
              </p>
              <p className={styles.countryRoute__paraKey}>
                Region:&nbsp;
                <span className={styles.countryRoute__paraValue}>
                  {country.region}
                </span>
              </p>
              <p className={styles.countryRoute__paraKey}>
                Sub Region:&nbsp;
                <span className={styles.countryRoute__paraValue}>
                  {country.subregion}
                </span>
              </p>
              <p className={styles.countryRoute__paraKey}>
                Capital:&nbsp;
                <span className={styles.countryRoute__paraValue}>
                  {country.capital}
                </span>
              </p>
            </div>
            <div className={styles.CountryRoute__detailsSection}>
              <p className={styles.countryRoute__paraKey}>
                Top Level Domain:&nbsp;
                <span className={styles.countryRoute__paraValue}>
                  {country.topLevelDomain[0]}
                </span>
              </p>
              <p className={styles.countryRoute__paraKey}>
                Currencies:&nbsp;
                <span className={styles.countryRoute__paraValue}>
                  {country.currencies[0].code}
                </span>
              </p>
              <p className={styles.countryRoute__paraKey}>
                Languages:&nbsp;
                <span className={styles.countryRoute__paraValue}>
                  {country.languages
                    .map((language) => language.name)
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
          {country.borders && (
            <article className={styles.countryRoute__borderCountries}>
              <h2
                className={`${styles.countryRoute__borderCountries__heading} ${
                  isDarkTheme ? styles.darkTheme : ""
                }`}
              >
                Border Countries:
              </h2>
              <div
                className={styles.countryRoute__borderCountries__btnContainer}
              >
                {country.borders.map((border) => (
                  <Button key={border}>
                    <Link
                      className={`${styles.link} ${
                        isDarkTheme ? styles.darkTheme : ""
                      }`}
                      to={`../${countryCodes[border]}`}
                    >
                      {countryCodes[border]}
                    </Link>
                  </Button>
                ))}
              </div>
            </article>
          )}
        </section>
      </div>
    </div>
  );
}

export default CountryRoute;

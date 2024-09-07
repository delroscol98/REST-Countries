import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import useTheme from "../../hooks/useTheme";
import styles from "./CountryRoute.module.css";
import { countryCodes } from "../../utilities/countryCodes";
import { Link, useNavigate } from "react-router-dom";

function CountryRoute({ country }) {
  const { isDarkTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <main>
      <Header />
      <div
        className={`${styles.countryRoute} ${
          isDarkTheme ? styles.darkTheme : ""
        }`}
      >
        <Button onClick={() => navigate(-1)}>&larr; Back</Button>
        <div className={styles.countryRoute__container}>
          <img
            className={styles.countryRoute__flag}
            src={country.flag}
            alt={`${country.denonym} flag`}
          />
          <section className={styles.countryRoute__detailsContainer}>
            <h1 className={styles.countryRoute__name}>{country.name}</h1>
            <div className={styles.countryRoute__details}>
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
                <h2 className={styles.countryRoute__borderCountries__heading}>
                  Border Countries:
                </h2>
                <div
                  className={styles.countryRoute__borderCountries__btnContainer}
                >
                  {country.borders.map((border) => (
                    <Link to={`../${countryCodes[border]}`} key={border}>
                      <Button>{countryCodes[border]}</Button>
                    </Link>
                  ))}
                </div>
              </article>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default CountryRoute;

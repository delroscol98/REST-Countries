import Header from "../../components/Header/Header";
import styles from "./CountryRoute.module.css";

function CountryRoute({ country }) {
  return (
    <main className={styles.countryRoute}>
      <Header />
      <h1>{country.name}</h1>
    </main>
  );
}

export default CountryRoute;

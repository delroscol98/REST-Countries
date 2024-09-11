import styles from "./NoCountries.module.css";

function NoCountries() {
  return (
    <div className={styles.noCountries}>
      <p>Sorry... unable to find the country 😢</p>
    </div>
  );
}

export default NoCountries;

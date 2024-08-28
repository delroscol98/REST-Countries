import styles from "./CountriesHeader.module.css";
import Icon from "../../../public/images/search-outline.svg";

function CountriesHeader() {
  return (
    <div className={styles.countriesHeader}>
      <div className={styles.countriesHeader__searchContainer}>
        <Icon className={styles.countriesHeader__searchIcon} />
        <input
          className={styles.countriesHeader__searchInput}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
}

export default CountriesHeader;

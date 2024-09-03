import styles from "./CountriesHeader.module.css";
import SearchIcon from "../../../public/images/search-outline.svg";
import ChevronIcon from "../../../public/images/chevron-down-outline.svg";
import useTheme from "../../hooks/useTheme";
import useCountries from "../../hooks/useCounties";

function CountriesHeader() {
  const { isDarkTheme } = useTheme();
  const {
    dropdownOpen,
    dropdownOption,
    searchedCountry,
    handleDropdownOpen,
    handleFilterCountries,
    handleSearchCountries,
  } = useCountries();

  return (
    <div className={styles.countriesHeader}>
      <div
        className={`${styles.countriesHeader__searchContainer} ${
          isDarkTheme ? styles.darkTheme : ""
        }`}
      >
        <SearchIcon
          className={`${styles.countriesHeader__searchIcon} ${
            isDarkTheme ? styles.darkTheme : ""
          }`}
        />
        <input
          className={`${styles.countriesHeader__searchInput} ${
            isDarkTheme ? styles.darkTheme : ""
          }`}
          type="text"
          placeholder="Search for a country..."
          value={searchedCountry}
          onChange={handleSearchCountries}
        />
      </div>
      <div className={styles.countriesHeader__dropdown}>
        <button
          className={`${styles.countriesHeader__dropdownBtn} ${
            isDarkTheme ? styles.darkTheme : ""
          }`}
          onClick={handleDropdownOpen}
        >
          {dropdownOption ? dropdownOption : "Filter by Region"}
          <ChevronIcon
            className={`${styles.countriesHeader__dropdownIcon} ${
              dropdownOpen ? styles.isOpen : ""
            } ${isDarkTheme ? styles.darkTheme : ""}`}
          />
        </button>
        {dropdownOpen && (
          <ul
            className={`${styles.countriesHeader__dropdownList} ${
              isDarkTheme ? styles.darkTheme : ""
            }`}
          >
            <li
              className={styles.countriesHeader__dropdownListItem}
              onClick={() => handleFilterCountries("Africa")}
            >
              Africa
            </li>
            <li
              className={styles.countriesHeader__dropdownListItem}
              onClick={() => handleFilterCountries("Americas")}
            >
              Americas
            </li>
            <li
              className={styles.countriesHeader__dropdownListItem}
              onClick={() => handleFilterCountries("Asia")}
            >
              Asia
            </li>
            <li
              className={styles.countriesHeader__dropdownListItem}
              onClick={() => handleFilterCountries("Europe")}
            >
              Europe
            </li>
            <li
              className={styles.countriesHeader__dropdownListItem}
              onClick={() => handleFilterCountries("Oceania")}
            >
              Oceania
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default CountriesHeader;

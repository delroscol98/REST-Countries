import styles from "./CountriesHeader.module.css";
import SearchIcon from "../../../public/images/search-outline.svg";
import ChevronIcon from "../../../public/images/chevron-down-outline.svg";
import { useState } from "react";

function CountriesHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropdown = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <div className={styles.countriesHeader}>
      <div className={styles.countriesHeader__searchContainer}>
        <SearchIcon className={styles.countriesHeader__searchIcon} />
        <input
          className={styles.countriesHeader__searchInput}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
      <div className={styles.countriesHeader__dropdown}>
        <button
          className={styles.countriesHeader__dropdownBtn}
          onClick={handleOpenDropdown}
        >
          Filter by Region
          <ChevronIcon className={styles.countriesHeader__dropdownIcon} />
        </button>
        {isOpen && (
          <ul className={styles.countriesHeader__dropdownList}>
            <li className={styles.countriesHeader__dropdownListItem}>Africa</li>
            <li className={styles.countriesHeader__dropdownListItem}>
              America
            </li>
            <li className={styles.countriesHeader__dropdownListItem}>Asia</li>
            <li className={styles.countriesHeader__dropdownListItem}>Europe</li>
            <li className={styles.countriesHeader__dropdownListItem}>
              Oceania
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default CountriesHeader;

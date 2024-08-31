import styles from "./CountriesHeader.module.css";
import SearchIcon from "../../../public/images/search-outline.svg";
import ChevronIcon from "../../../public/images/chevron-down-outline.svg";
import { useState } from "react";
import useTheme from "../../hooks/useTheme";

function CountriesHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState("Filter by Region");
  const { isDarkTheme } = useTheme();

  const handleOpenDropdown = () => {
    setIsOpen(() => !isOpen);
  };

  const handleSelectOption = (e) => {
    setOption(e.target.innerHTML);
    setIsOpen(false);
  };

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
        />
      </div>
      <div className={styles.countriesHeader__dropdown}>
        <button
          className={`${styles.countriesHeader__dropdownBtn} ${
            isDarkTheme ? styles.darkTheme : ""
          }`}
          onClick={handleOpenDropdown}
        >
          {option}
          <ChevronIcon
            className={`${styles.countriesHeader__dropdownIcon} ${
              isOpen ? styles.isOpen : ""
            } ${isDarkTheme ? styles.darkTheme : ""}`}
          />
        </button>
        {isOpen && (
          <ul
            className={`${styles.countriesHeader__dropdownList} ${
              isDarkTheme ? styles.darkTheme : ""
            }`}
          >
            <li
              className={styles.countriesHeader__dropdownListItem}
              onClick={handleSelectOption}
            >
              Africa
            </li>
            <li
              className={styles.countriesHeader__dropdownListItem}
              onClick={handleSelectOption}
            >
              America
            </li>
            <li
              className={styles.countriesHeader__dropdownListItem}
              onClick={handleSelectOption}
            >
              Asia
            </li>
            <li
              className={styles.countriesHeader__dropdownListItem}
              onClick={handleSelectOption}
            >
              Europe
            </li>
            <li
              className={styles.countriesHeader__dropdownListItem}
              onClick={handleSelectOption}
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

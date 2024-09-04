import useCountries from "../../hooks/useCounties";
import useTheme from "../../hooks/useTheme";
import styles from "./Pagination.module.css";

function Pagination() {
  const {
    countriesList,
    countriesPerPage,
    currentPage,
    handlePrevPage,
    handleNextPage,
  } = useCountries();
  const { isDarkTheme } = useTheme();

  return (
    <div className={styles.pagination}>
      <p
        className={`${styles.pagination__result} ${
          isDarkTheme ? styles.darkTheme : ""
        }`}
      >
        Showing page {currentPage} of{" "}
        {Math.ceil(countriesList.length / countriesPerPage)}
      </p>
      <div className={styles.pagination__btnContainer}>
        <button
          className={`${styles.pagination__btnContainer__btn} ${
            isDarkTheme ? styles.darkTheme : ""
          }`}
          onClick={handlePrevPage}
        >
          Previous
        </button>
        <button
          className={`${styles.pagination__btnContainer__btn} ${
            isDarkTheme ? styles.darkTheme : ""
          }`}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;

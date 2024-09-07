import useCountries from "../../hooks/useCounties";
import useTheme from "../../hooks/useTheme";
import Button from "../Button/Button";
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
        {currentPage > 1 && (
          <Button onClick={handlePrevPage}>&larr; Previous</Button>
        )}
        {currentPage !== Math.ceil(countriesList.length / countriesPerPage) && (
          <Button onClick={handleNextPage}>Next &rarr;</Button>
        )}
      </div>
    </div>
  );
}

export default Pagination;

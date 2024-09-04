import useCountries from "../../hooks/useCounties";
import styles from "./Pagination.module.css";

function Pagination() {
  const {
    countriesList,
    countriesPerPage,
    currentPage,
    handlePrevPage,
    handleNextPage,
  } = useCountries();

  return (
    <div className={styles.pagination}>
      <p className={styles.pagination__result}>
        Showing page {currentPage} of{" "}
        {Math.ceil(countriesList.length / countriesPerPage)}
      </p>
      <div className={styles.pagination__btnContainer}>
        <button
          className={styles.pagination__btnContainer__btn}
          onClick={handlePrevPage}
        >
          Previous
        </button>
        <button
          className={styles.pagination__btnContainer__btn}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;

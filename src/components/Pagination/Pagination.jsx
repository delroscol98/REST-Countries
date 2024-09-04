import useCountries from "../../hooks/useCounties";
import styles from "./Pagination.module.css";

function Pagination() {
  const { countriesList, countriesPerPage, handleSelectPage } = useCountries();

  let pages = [];
  for (let i = 0; i < Math.ceil(countriesList.length / countriesPerPage); i++) {
    pages.push(i + 1);
  }

  return (
    <div className={styles.pagination}>
      <p className={styles.pagination__result}>
        Showing X to Y results of Z results
      </p>
      <div className={styles.pagination__btnContainer}>
        <button className={styles.pagination__btnContainer__btn}>
          Previous
        </button>
        <button className={styles.pagination__btnContainer__btn}>Next</button>
      </div>
    </div>
  );
}

export default Pagination;

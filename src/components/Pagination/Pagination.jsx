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
      {pages.map((page, index) => (
        <button
          className={styles.pagination__btn}
          key={index}
          onClick={() => handleSelectPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;

import Header from "../../components/Header/Header";
import useTheme from "../../hooks/useTheme";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  const { isDarkTheme } = useTheme();
  return (
    <>
      <Header />
      <div
        className={`${styles.pageNotFound} ${
          isDarkTheme ? styles.darkTheme : ""
        }`}
      >
        <p className={styles.pageNotFound__code}>404</p>
        <h1 className={styles.pageNotFound__heading}>Page not found</h1>
        <p className={styles.pageNotFound__message}>
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
    </>
  );
}

export default PageNotFound;

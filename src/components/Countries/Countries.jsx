import styles from "./Countries.module.css";

function Countries({ children }) {
  return <div className={styles.countries}>{children}</div>;
}

export default Countries;

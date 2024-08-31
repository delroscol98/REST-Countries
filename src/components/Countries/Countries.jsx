import styles from "./Countries.module.css";
import useTheme from "../../hooks/useTheme";

function Countries({ children }) {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={`${styles.countries} ${isDarkTheme ? styles.darkTheme2 : ""}`}
    >
      {children}
    </div>
  );
}

export default Countries;

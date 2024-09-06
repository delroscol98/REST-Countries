import useTheme from "../../hooks/useTheme";
import styles from "./Button.module.css";

function Button({ children, onClick }) {
  const { isDarkTheme } = useTheme();
  return (
    <button
      className={`${styles.button} ${isDarkTheme ? styles.darkTheme : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

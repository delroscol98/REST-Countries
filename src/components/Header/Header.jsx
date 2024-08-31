import styles from "./Header.module.css";
import Icon from "../../../public/images/moon-outline.svg";
import useTheme from "../../hooks/useTheme";

function Header() {
  const { isDarkTheme, handleDarkTheme } = useTheme();

  return (
    <header
      className={`${styles.header} ${isDarkTheme ? styles.darkTheme : ""}`}
    >
      <h1
        className={`${styles.header__heading} ${
          isDarkTheme ? styles.darkTheme : ""
        }`}
      >
        Where in the world?
      </h1>
      <button
        className={`${styles.header__btn} ${
          isDarkTheme ? styles.darkTheme : ""
        }`}
        onClick={handleDarkTheme}
      >
        <Icon
          className={`${styles.header__btnIcon} ${
            isDarkTheme ? styles.darkTheme : ""
          }`}
        />
        Dark Mode
      </button>
    </header>
  );
}

export default Header;

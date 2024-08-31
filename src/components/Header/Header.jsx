import styles from "./Header.module.css";
import Icon from "../../../public/images/moon-outline.svg";
import useTheme from "../../hooks/useTheme";

function Header() {
  const { isDarkTheme, handleDarkTheme } = useTheme();

  return (
    <header
      className={`${styles.header} ${isDarkTheme ? styles.darkTheme1 : ""}`}
    >
      <h1
        className={`${styles.header__heading} ${
          isDarkTheme ? styles.darkTheme1 : ""
        }`}
      >
        Where in the world?
      </h1>
      <button
        className={`${styles.header__btn} ${
          isDarkTheme ? styles.darkTheme1 : ""
        }`}
        onClick={handleDarkTheme}
      >
        <Icon
          className={`${styles.header__btnIcon} ${
            isDarkTheme ? styles.darkTheme1 : ""
          }`}
        />
        Dark Mode
      </button>
    </header>
  );
}

export default Header;

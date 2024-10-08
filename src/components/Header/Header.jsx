import styles from "./Header.module.css";
import DarkIcon from "../../../public/images/moon-outline.svg";
import LightIcon from "../../../public/images/sunny-outline.svg";
import useTheme from "../../hooks/useTheme";
import { useNavigate } from "react-router-dom";

function Header() {
  const { isDarkTheme, handleDarkTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <header
      className={`${styles.header} ${isDarkTheme ? styles.darkTheme : ""}`}
    >
      <h1
        className={`${styles.header__heading} ${
          isDarkTheme ? styles.darkTheme : ""
        }`}
        onClick={() => navigate("/")}
      >
        Where in the world?
      </h1>
      <button
        className={`${styles.header__btn} ${
          isDarkTheme ? styles.darkTheme : ""
        }`}
        onClick={handleDarkTheme}
      >
        {isDarkTheme ? (
          <LightIcon
            className={`${styles.header__btnIcon} ${styles.darkTheme}`}
          />
        ) : (
          <DarkIcon className={styles.header__btnIcon} />
        )}
        {isDarkTheme ? "Light Mode " : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;

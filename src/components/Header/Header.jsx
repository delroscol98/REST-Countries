import styles from "./Header.module.css";
import Icon from "../../../public/images/moon-outline.svg";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__heading}>Where in the world?</h1>
      <button className={styles.header__btn}>
        <Icon className={styles.header__btnIcon} />
        Dark Mode
      </button>
    </header>
  );
}

export default Header;

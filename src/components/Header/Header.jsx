import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__heading}>Where in the world?</h1>
      <button className={styles.header__btn}>
        <img
          className={styles.header__btnIcon}
          src="./images/moon-outline.svg"
          alt="moon icon"
        />
        Dark Mode
      </button>
    </header>
  );
}

export default Header;

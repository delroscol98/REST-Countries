import styles from "./SpinnerFullPage.module.css";
import Spinner from "../Spinner/Spinner";
import useTheme from "../../hooks/useTheme";

function SpinnerFullPage() {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className={`${styles.spinnerFullpage} ${
        isDarkTheme ? styles.darkTheme : ""
      }`}
    >
      <Spinner />
    </div>
  );
}

export default SpinnerFullPage;

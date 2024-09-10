import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

function MainPage() {
  return (
    <main>
      <Header />

      <Outlet />
    </main>
  );
}

export default MainPage;

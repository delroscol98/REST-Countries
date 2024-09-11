import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import MainPage from "./pages/MainPage/MainPage";

const Homepage = lazy(() => import("./pages/HomePage/Homepage"));
const CountryRoute = lazy(() => import("./pages/CountryRoute/CountryRoute"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Homepage />} />
            <Route path="/:countryName" element={<CountryRoute />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

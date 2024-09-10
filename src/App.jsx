import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useCountries from "./hooks/useCountries";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import MainPage from "./pages/MainPage/MainPage";

const Homepage = lazy(() => import("./pages/HomePage/Homepage"));
const CountryRoute = lazy(() => import("./pages/CountryRoute/CountryRoute"));

function App() {
  const { countriesList } = useCountries();
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Homepage />} />
            {countriesList.map((country) => (
              <Route
                key={country.name}
                path={country.name}
                element={<CountryRoute country={country} />}
              />
            ))}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

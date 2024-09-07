import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useCountries from "./hooks/useCounties";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage";

const Homepage = lazy(() => import("./pages/HomePage/Homepage"));
const CountryRoute = lazy(() => import("./pages/CountryRoute/CountryRoute"));

function App() {
  const { countriesList } = useCountries();
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {countriesList.map((country) => (
            <Route
              key={country.name}
              path={country.name}
              element={<CountryRoute country={country} />}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

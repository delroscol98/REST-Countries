import { BrowserRouter, Route, Routes } from "react-router-dom";
import useCountries from "./hooks/useCounties";
import CountryRoute from "./pages/CountryRoute/CountryRoute";
import Homepage from "./pages/HomePage/Homepage";

function App() {
  const { countriesList } = useCountries();
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        {countriesList.map((country) => (
          <Route
            key={country.name}
            path={country.name}
            element={<CountryRoute country={country} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

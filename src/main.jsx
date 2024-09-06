import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import CountryRoute from "./components/CountryRoute/CountryRoute.jsx";
import { CountriesProvider } from "./contexts/CountriesContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CountriesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<App />} />
            <Route path="CountryRoute" element={<CountryRoute />} />
          </Routes>
        </BrowserRouter>
      </CountriesProvider>
    </ThemeProvider>
  </StrictMode>
);

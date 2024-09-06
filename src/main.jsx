import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CountriesProvider } from "./contexts/CountriesContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </ThemeProvider>
  </StrictMode>
);

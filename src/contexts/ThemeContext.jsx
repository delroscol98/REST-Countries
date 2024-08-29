import { useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleDarkTheme = () => {
    setIsDarkTheme(() => !isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, handleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };

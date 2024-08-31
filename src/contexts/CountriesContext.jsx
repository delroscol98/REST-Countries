import { createContext, useCallback, useEffect, useState } from "react";

const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const [countriesList, setCountriesList] = useState([]);

  const fetchCountries = useCallback(async () => {
    try {
      const res = await fetch("./data/data.json");
      const data = await res.json();
      console.log(data);
      setCountriesList(data);
    } catch (err) {
      throw new Error("Unable to fetch countries");
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <CountriesContext.Provider value={{ countriesList }}>
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesProvider, CountriesContext };

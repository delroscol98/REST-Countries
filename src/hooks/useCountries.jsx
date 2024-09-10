import { useContext } from "react";
import { CountriesContext } from "../contexts/CountriesContext";

const useCountries = () => {
  const context = useContext(CountriesContext);
  if (context === undefined)
    throw new Error("CountriesContext was used outside of CountriesProvider");
  return context;
};

export default useCountries;

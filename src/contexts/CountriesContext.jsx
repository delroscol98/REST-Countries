import { useReducer } from "react";
import { createContext, useCallback, useEffect, useState } from "react";

const CountriesContext = createContext();

const initialState = {
  countries: [],
  countriesList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetchCountries":
      return {
        ...state,
        countries: action.payload,
        countriesList: action.payload,
      };
    case "filterCountries":
      return {
        ...state,
        countriesList: state.countries.filter(
          (country) => country.region === action.payload
        ),
      };
  }
};

const CountriesProvider = ({ children }) => {
  const [{ countriesList }, dispatch] = useReducer(reducer, initialState);
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [dropdownOption, setDropdownOption] = useState("Filter by Region");

  const fetchCountries = useCallback(async () => {
    try {
      const res = await fetch("./data/data.json");
      const data = await res.json();
      console.log(data);
      dispatch({ type: "fetchCountries", payload: data });
    } catch (err) {
      throw new Error("Unable to fetch countries");
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const handleDropdownOpen = () => {
    setDropDownOpen(() => !dropdownOpen);
  };

  const handleFilterCountries = (region) => {
    setDropdownOption(region);
    setDropDownOpen(false);
    dispatch({ type: "filterCountries", payload: region });
  };

  return (
    <CountriesContext.Provider
      value={{
        countriesList,
        dropdownOpen,
        dropdownOption,
        handleDropdownOpen,
        handleFilterCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesProvider, CountriesContext };

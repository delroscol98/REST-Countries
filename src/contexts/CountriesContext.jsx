import { useReducer } from "react";
import { createContext, useCallback, useEffect } from "react";

const CountriesContext = createContext();

const initialState = {
  countries: [],
  countriesList: [],
  dropdownOpen: false,
  dropdownOption: "Filter by Region",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetchCountries":
      return {
        ...state,
        countries: action.payload,
        countriesList: action.payload,
      };
    case "toggleDropdown":
      return {
        ...state,
        dropdownOpen: !state.dropdownOpen,
      };
    case "filterCountries":
      return {
        ...state,
        dropdownOpen: false,
        dropdownOption: action.payload,
        countriesList: state.countries.filter(
          (country) => country.region === action.payload
        ),
      };
  }
};

const CountriesProvider = ({ children }) => {
  const [{ countriesList, dropdownOpen, dropdownOption }, dispatch] =
    useReducer(reducer, initialState);

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
    dispatch({ type: "toggleDropdown" });
  };

  const handleFilterCountries = (region) => {
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

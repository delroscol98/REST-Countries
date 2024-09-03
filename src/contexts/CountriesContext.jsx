import { useReducer } from "react";
import { createContext, useCallback, useEffect } from "react";

const CountriesContext = createContext();

const initialState = {
  countries: [],
  countriesList: [],
  dropdownOpen: false,
  dropdownOption: "",
  searchedCountry: "",
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
    case "searchCountries":
      return {
        ...state,
        searchedCountry: action.payload,
        countriesList: state.countries.filter((country) =>
          state.dropdownOption
            ? country.name
                .toLowerCase()
                .includes(action.payload.toLowerCase()) &&
              country.region === state.dropdownOption
            : country.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
  }
};

const CountriesProvider = ({ children }) => {
  const [
    { countriesList, dropdownOpen, dropdownOption, searchedCountry },
    dispatch,
  ] = useReducer(reducer, initialState);

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

  const handleSearchCountries = (e) => {
    dispatch({ type: "searchCountries", payload: e.target.value });
  };

  return (
    <CountriesContext.Provider
      value={{
        countriesList,
        dropdownOpen,
        dropdownOption,
        searchedCountry,
        handleDropdownOpen,
        handleFilterCountries,
        handleSearchCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesProvider, CountriesContext };

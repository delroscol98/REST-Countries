import { useReducer } from "react";
import { createContext, useCallback, useEffect } from "react";

const CountriesContext = createContext();

const RESULTS_PER_PAGE = 8;

const initialState = {
  countries: [],
  countriesList: [],
  dropdownOpen: false,
  dropdownOption: "",
  searchedCountry: "",
  currentPage: 1,
  countriesPerPage: RESULTS_PER_PAGE,
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
        currentPage: 1,
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
    case "selectPage":
      return {
        ...state,
        currentPage: action.payload,
      };
  }
};

const CountriesProvider = ({ children }) => {
  const [
    {
      countriesList,
      dropdownOpen,
      dropdownOption,
      searchedCountry,
      currentPage,
      countriesPerPage,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const renderedCountries = countriesList.slice(
    firstCountryIndex,
    lastCountryIndex
  );

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

  const handleSelectPage = (page) => {
    dispatch({ type: "selectPage", payload: page });
  };

  return (
    <CountriesContext.Provider
      value={{
        countriesList,
        dropdownOpen,
        dropdownOption,
        searchedCountry,
        renderedCountries,
        currentPage,
        countriesPerPage,
        handleDropdownOpen,
        handleFilterCountries,
        handleSearchCountries,
        handleSelectPage,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesProvider, CountriesContext };
